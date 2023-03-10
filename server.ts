import * as net from 'net';

function escreverNoSocket(socket: net.Socket, mensagem: string): void {
   socket.write(`${mensagem}\n`);
}


export function meuServer(): void {
   const server = net.createServer((socket: net.Socket) => {
      const { remoteAddress, remotePort } = socket;
      console.log(`Cliente conectado: ${remoteAddress}:${remotePort}`);
      escreverNoSocket(socket, 'Bem vindo');

      let chances = 8;
      const palavraAdvinhar = 'teste';

      function verificarLetra(letra: string): string {
         if (palavraAdvinhar.includes(letra)) {
            return `A letra ${letra} está presente na palavra`;
         } else {
            chances--;
            return `A letra ${letra} não está presente na palavra`;
         }
      }

      function gerarPlacarIndividual(): { chances: number; palavraAdvinhar: string } {
         return {
            chances,
            palavraAdvinhar,
         };
      }

      escreverNoSocket(socket, `Você tem ${chances} chances iniciais. Digite uma letra:`);

      socket.on('data', (data: Buffer) => {
         const msgDoCliente = data.toString().trim();

         if (msgDoCliente === 'desconectar') {
            escreverNoSocket(socket, 'Desconectado');
            socket.end();
            console.log(`Cliente desconectado: ${remoteAddress}:${remotePort}`);
         } else if (msgDoCliente.length === 1) {
            const resultado = verificarLetra(msgDoCliente);
            escreverNoSocket(socket, `RESULT:${resultado}`);
            const placarIndividual = gerarPlacarIndividual();
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
