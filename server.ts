import * as net from 'net';

import * as dependencias from './utils';


function minhaSala(): void {
   // !array de sockets
   const sockets: net.Socket[] = [];
   let contador = 0;

   const server = net.createServer((socket: net.Socket) => {
      console.log(`Cliente conectado: ${socket.remoteAddress}:${socket.remotePort}`);

      sockets.push(socket);
      contador++;
      dependencias.escreverNoSocket(socket, `Você é o ${contador}º jogador.\n Aguarde...`);

      if (contador % 2 !== 0 && contador >= 2) {
         // .se impar e >=2 ou seja depois da primeira dupla
         dependencias.escreverNoSocket(socket, `Você está na sala de espera.\n Aguarde o próximo jogador...`);
         console.log(`Cliente número: ${contador} levado para sala de espera`);

      } else if (contador % 2 == 0 && contador > 0) { //. se par

         const clientes: dependencias.Cliente[] = sockets.map((s) => {
            return {
               chances: 2,
               palavraAdvinhar: 'teste',
               socket: s,
            };
         });

         dependencias.infoIniciaisParaDupla(clientes, socket, sockets)

         // ouvir jogador 1
         socket.on('data', (data: Buffer) => {
            const msgDoCliente = data.toString().trim();

            let index = dependencias.identificarIndexDoSocket(socket, sockets)
            dependencias.tratarPrincipaisEntradas(msgDoCliente, sockets[index], sockets, clientes)//!
         })

         // ouvir jogador 2
         let outroJogador = dependencias.encontrarJ1eJ2(socket, sockets)
         sockets[outroJogador].on('data', (data: Buffer) => {
            const msgDoCliente = data.toString().trim();

            // escreverNoSocket(sockets[outroJogador],'teste2')
            dependencias.tratarPrincipaisEntradas(msgDoCliente, sockets[outroJogador], sockets, clientes)//!
         })
      };
   });

   server.on('error', (err: Error) => {
      console.error(`Ocorreu um erro no servidor: ${err.message}`);
   });

   server.listen(4000, () => {
      console.log('Servidor inicializado na porta 4000');
   });

}

minhaSala()

