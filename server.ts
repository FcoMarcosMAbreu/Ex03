import * as net from 'net';

interface ClientInfo {
   address: string;
   port: number;
}

const clients = new Map<net.Socket, ClientInfo>();

export function server(): void {
   const server = net.createServer((socket: net.Socket) => {
      const { remoteAddress, remotePort } = socket;
      const clientInfo: ClientInfo = { address: remoteAddress!, port: remotePort! };
      clients.set(socket, clientInfo);

      console.log(`Cliente conectado: ${remoteAddress}:${remotePort}`);
      socket.write('Olá, cliente!\n');

      socket.on('data', (data: Buffer) => {
         const inputClient = data.toString();
         if (inputClient === 'desconectar') {
            socket.write('Desconectado');
            socket.end();
            console.log(`Cliente desconectado: ${remoteAddress}:${remotePort}`);
            clients.delete(socket);
         }
      });
   });

   server.on('error', (err: Error) => {
      console.error(`Ocorreu um erro no servidor: ${err.message}`);
   });

   server.listen(3000, () => {
      console.log('Servidor inicializado na porta 3000');
   });
}

// server();
