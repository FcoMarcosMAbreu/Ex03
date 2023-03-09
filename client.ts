import * as net from 'net';
import readline from 'readline';

interface ClientInfo {
   id: string;
   socket: net.Socket;
}

function chooseClientId(): Promise<string> {
   return new Promise((resolve) => {
      const rl = readline.createInterface({
         input: process.stdin,
         output: process.stdout,
      });
      rl.question('Digite o ID do cliente: ', (id) => {
         rl.close();
         resolve(id);
      });
   });
}

export async function client(): Promise<void> {
   const id = await chooseClientId();
   const client: net.Socket = new net.Socket();
   const clientInfo: ClientInfo = { id, socket: client };

   client.connect(3000, 'localhost', () => {
      console.log(`Conectado ao servidor como cliente ${id}`);
      client.write(`ID:${id}`);
   });

   client.on('data', (data: Buffer) => {
      console.log(`> Mensagem do servidor para cliente ${id}: ${data.toString()}`);
   });

   client.on('error', (err) => {
      console.error(`Erro ao conectar ao servidor: ${err.message}`);
   });

   process.stdin.on('data', (data: Buffer) => {
      // Aqui serão feitas as jogadas ou o comando de sair.
      client.write(`[${id}]: ${data.toString()}`);
   });

   client.on('close', () => {
      console.log(`Conexão com o servidor encerrada para o cliente ${id}`);
      process.exit();
   });
}

client()