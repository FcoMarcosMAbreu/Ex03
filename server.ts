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
         dependencias.escreverNoSocket(socket, `***Você está na sala de espera.***\n Aguarde o próximo jogador...`);
         console.log(`Cliente número: ${contador} levado para sala de espera`);

      } else if (contador % 2 == 0 && contador > 0) { //. se par

         const clientes: dependencias.Cliente[] = sockets.map((s) => {
            return {
               chances: 8,
               palavraAdvinhar: 'teste',
               socket: s,
            };
         });

         dependencias.infoIniciaisParaDupla(clientes, socket, sockets)

         // ouvir jogadores
         socket.on('data', (data: Buffer) => {
            dependencias.msgJogador1(data,clientes,socket,sockets)
         })

         let outroJogador = dependencias.encontrarJ1eJ2(socket, sockets)
         sockets[outroJogador].on('data', (data: Buffer) => {
            dependencias.msgJogador2(data,clientes,socket,sockets,outroJogador)
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

