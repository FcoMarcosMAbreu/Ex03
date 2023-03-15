import * as net from 'net';

interface Cliente {
   chances: number;
   palavraAdvinhar: string;
   socket: net.Socket;
}

function escreverNoSocket(socket: net.Socket, mensagem: string): void {
   socket.write(`${mensagem}\n`);
}

function verificarLetra(letra: string, cliente: Cliente): string {
   if (cliente.palavraAdvinhar.includes(letra)) {
      return `A letra ${letra} está presente na palavra`;
   } else {
      cliente.chances--;
      return `A letra ${letra} não está presente na palavra`;
   }
}
function principaisEntradas(msgDoCliente: string,clientes: Cliente[],numeroJogador: number) {
   if (msgDoCliente === 'desconectar') {
      escreverNoSocket(clientes[numeroJogador].socket, 'Desconectado');
      clientes[numeroJogador].socket.end();
      console.log(`Cliente desconectado: ${clientes[numeroJogador].socket.remoteAddress}:${clientes[numeroJogador].socket.remotePort}`);

   }else if (msgDoCliente.length === 1) {
      const resultado = verificarLetra(msgDoCliente, clientes[numeroJogador]);
      escreverNoSocket(clientes[numeroJogador].socket, `RESULT:${resultado}`);
      const placarIndividual = gerarPlacarIndividual(clientes[numeroJogador]);
      escreverNoSocket(clientes[numeroJogador].socket, `CHANCES:${placarIndividual.chances}`);
   }
}

function infosIniciais(clientes: Cliente[],contador:number){
   let ultimoJogador: number = contador-1
   let penultimoJogador: number = ultimoJogador-1
   // .adaptação necessário pq a lista de sockets começa em zero mas o contador em 1
   if (ultimoJogador > 1) {
      escreverNoSocket(clientes[ultimoJogador].socket, `Você tem ${clientes[ultimoJogador].chances} chances iniciais. Digite uma letra:`);
      escreverNoSocket(clientes[penultimoJogador].socket, `Você tem ${clientes[penultimoJogador].chances} chances iniciais. Digite uma letra:`);

   }else{
      escreverNoSocket(clientes[0].socket, `Você tem ${clientes[0].chances} chances iniciais. Digite uma letra:`);
      escreverNoSocket(clientes[1].socket, `Você tem ${clientes[1].chances} chances iniciais. Digite uma letra:`);
   }

}

function gerarPlacarIndividual(cliente: Cliente): { chances: number; palavraAdvinhar: string } {
   return {
      chances: cliente.chances,
      palavraAdvinhar: cliente.palavraAdvinhar,
   };
}

export function minhaSala(): void {
   // !array de sockets
   const sockets: net.Socket[] = [];
   let contador = 0;

   const server = net.createServer((socket: net.Socket) => {
      console.log(`Cliente conectado: ${socket.remoteAddress}:${socket.remotePort}`);
      sockets.push(socket);
      contador++;
      escreverNoSocket(socket, `Você é o ${contador}º cliente na sala.\n Aguarde...`);
      
      socket.on('data', (data: Buffer) => { //. infos para determinados jogadores
         // escreverNoSocket(socket,`TESTANDO? ${socket.remoteAddress,socket.remotePort}`) //!teste
         // const msgDoCliente = data.toString().trim();
         // principaisEntradas(msgDoCliente,)

      });

      if (contador % 2 !== 0 && contador >=2) {
         // .se impar e >=2 ou seja depois da primeira dupla
         escreverNoSocket(socket, `Você está na sala de espera.\n Aguarde o próximo jogador...`);
         console.log(`Cliente número: ${contador} levado para sala de espera`);

      }else if (contador % 2 == 0 ) { //. se par
            const clientes: Cliente[] = sockets.map((s) => {
               return {
                  chances: 8,
                  palavraAdvinhar: 'teste',
                  socket: s,
               };
            });
            
            infosIniciais(clientes,contador) //.infos para última dupla que entrar
            
            clientes[0].socket.on('data', (data: Buffer) => {
            // .Tem que identificar o cliente nessa função pelo socket
               // .é necessário encontrar uma forma de identificar 
                  // .o cliente no array sem ser setando diretamente 
                     // .como [numero] para poder criar infinitas duplas
            // ,essas msgs só chegam no cliente 0 e 1 pq estão setados manaualmente
            // ,os outros não recebem elas
            // ,para resolver isso é necessário criar algo que associe socket X a jogador Y
            // , um dicioário por exemplo ou usar a interface com atributo jogador
            // , em ambos os casos precisa remover o cliente depois de desconectado
            // , talvez até resolvesse o problema do contador começar em 1 e a lista de socket em 0
            
            // ,modificar uma das funções para detectar qual socket enviar seria a melhor opção
               const msgDoCliente = data.toString().trim();
               principaisEntradas(msgDoCliente,clientes,0)
            });

            clientes[1].socket.on('data', (data: Buffer) => {
               const msgDoCliente = data.toString().trim();
               principaisEntradas(msgDoCliente,clientes,1)
            });

            // socket.on('data', (data: Buffer) => { //. infos para determinados jogadores
            // escreverNoSocket(socket,`Vc é esse cara? ${socket.remoteAddress}:${socket.remotePort}`)
            // escreverNoSocket(socket,`Vc é esse cara? ${socket.remoteAddress,socket.remotePort}`)
               
            // });

         };
   });
   server.on('error', (err: Error) => {
      console.error(`Ocorreu um erro no servidor: ${err.message}`);
   });

   server.listen(3000, () => {
      console.log('Servidor inicializado na porta 3000');
   });
}
minhaSala()

