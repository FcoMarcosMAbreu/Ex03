import * as net from 'net';
import readline from 'readline';

interface ClientInfo {
   id: string;
   socket: net.Socket;
}

export function client(id: string): void {
   const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
   });

   const client: net.Socket = new net.Socket();
   const clientInfo: ClientInfo = { id, socket: client };

   client.connect(3000, 'localhost', () => {
      console.log(`Conectado ao servidor como cliente ${id}`);
   });

   client.on('data', (data: Buffer) => {
      console.log(`> Mensagem do servidor para cliente ${id}: ${data.toString()}`);
   });

   client.on('error', (err) => {
      console.error(`Erro ao conectar ao servidor: ${err.message}`);
   });

   rl.addListener('line', line => {
      client.write(`[${id}]: ${line}`);
   });

   rl.on('close', () => {
      client.end();
   });

   client.on('close', () => {
      console.log(`Conexão com o servidor encerrada para o cliente ${id}`);
      process.exit();
   });
}

client('cliente1');
