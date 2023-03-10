import * as net from 'net';

interface Cliente {
   chances: number;
   palavraAdvinhar: string;
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

function gerarPlacarIndividual(cliente: Cliente): { chances: number; palavraAdvinhar: string } {
   return {
      chances: cliente.chances,
      palavraAdvinhar: cliente.palavraAdvinhar,
   };
}


export function meuServer(): void {
   const server = net.createServer((socket: net.Socket) => {
      const { remoteAddress, remotePort } = socket;
      console.log(`Cliente conectado: ${remoteAddress}:${remotePort}`);
      escreverNoSocket(socket, 'Bem vindo');

      const cliente: Cliente = {
         chances: 8,
         palavraAdvinhar: 'teste',
      };

      escreverNoSocket(socket, `Você tem ${cliente.chances} chances iniciais. Digite uma letra:`);

      socket.on('data', (data: Buffer) => {
         const msgDoCliente = data.toString().trim();
//. Essa parte vai precisar ser refatorada
         if (msgDoCliente === 'desconectar') {
            escreverNoSocket(socket, 'Desconectado');
            socket.end();
            console.log(`Cliente desconectado: ${remoteAddress}:${remotePort}`);
         } else if (msgDoCliente.length === 1) {
            const resultado = verificarLetra(msgDoCliente, cliente);
            escreverNoSocket(socket, `RESULT:${resultado}`);
            const placarIndividual = gerarPlacarIndividual(cliente);
            escreverNoSocket(socket, `CHANCES:${placarIndividual.chances}`);
            // escreverNoSocket(socket, `PALAVRA:${placarIndividual.palavraAdvinhar}`);
         }
      });
   });

   server.on('error', (err: Error) => {
      console.error(`Ocorreu um erro no servidor: ${err.message}`);
   });

   server.listen(4000, () => {
      console.log('Servidor inicializado na porta 4000');
   });
}

meuServer();
