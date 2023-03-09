"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meuServer = void 0;
const net = __importStar(require("net"));
// const words: string[] = [];
const palavraAdvinhar = 'teste';
let chances = 8;
function verificarLetra(letra) {
    if (palavraAdvinhar.includes(letra)) {
        return `A letra ${letra} está presente na palavra`;
    }
    else {
        chances--;
        return `A letra ${letra} não está presente na palavra`;
    }
}
function placar() {
    return chances;
}
function meuServer() {
    const server = net.createServer((socket) => {
        const { remoteAddress, remotePort } = socket;
        console.log(`Cliente conectado: ${remoteAddress}:${remotePort}`);
        socket.write('Bem vindo\n');
        socket.write(`Você tem ${chances} chances iniciais. Digite uma letra:\n`);
        socket.on('data', (data) => {
            const msgDoCliente = data.toString().trim();
            if (msgDoCliente === 'desconectar') {
                socket.write('Desconectado');
                socket.end();
                console.log(`Cliente desconectado: ${remoteAddress}:${remotePort}`);
            }
            else if (msgDoCliente.length === 1) {
                const resultado = verificarLetra(msgDoCliente);
                socket.write(`RESULT:${resultado}\n`);
                socket.write(`CHANCES:${placar()}\n`);
            }
        });
    });
    server.on('error', (err) => {
        console.error(`Ocorreu um erro no servidor: ${err.message}`);
    });
    server.listen(4000, () => {
        console.log('Servidor inicializado na porta 4000');
    });
}
exports.meuServer = meuServer;
meuServer();
