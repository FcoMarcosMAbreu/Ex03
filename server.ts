import * as net from 'net';


const palavraAdvinhar = 'teste';
let chances = 8;

function verificarLetra(letra: string): string {
   if (palavraAdvinhar.includes(letra)) {
      return `A letra ${letra} está presente na palavra`;
   } else {
      chances--; 
      return `A letra ${letra} não está presente na palavra`;
   }
}

function placar(): number {
   return chances;
}

export function meuServer(): void {
   const server = net.createServer((socket: net.Socket) => {
      const { remoteAddress, remotePort } = socket;
      console.log(`Cliente conectado: ${remoteAddress}:${remotePort}`);
      socket.write('Bem vindo\n');
      socket.write(`Você tem ${chances} chances iniciais. Digite uma letra:\n`);

      socket.on('data', (data: Buffer) => {
         const msgDoCliente = data.toString().trim();

         if (msgDoCliente === 'desconectar') {
            socket.write('Desconectado');
            socket.end();
            console.log(`Cliente desconectado: ${remoteAddress}:${remotePort}`);
         } else if (msgDoCliente.length === 1) {
            const resultado = verificarLetra(msgDoCliente);
            socket.write(`RESULT:${resultado}\n`);
            socket.write(`CHANCES:${placar()}\n`);
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
