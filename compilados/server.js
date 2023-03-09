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
exports.server = void 0;
const net = __importStar(require("net"));
const clients = new Map();
const words = [];
function server() {
    const server = net.createServer((socket) => {
        const { remoteAddress, remotePort } = socket;
        const clientInfo = { address: remoteAddress, port: remotePort };
        clients.set(socket, clientInfo);
        console.log(`Cliente conectado: ${remoteAddress}:${remotePort}`);
        socket.write('Olá, cliente!\n');
        socket.on('data', (data) => {
            const inputClient = data.toString().trim();
            if (inputClient === 'desconectar') {
                socket.write('Desconectado');
                socket.end();
                console.log(`Cliente desconectado: ${remoteAddress}:${remotePort}`);
                clients.delete(socket);
            }
            else {
                words.push(inputClient);
                if (words.length === 2) {
                    const [word1, word2] = words;
                    const result = word1 === word2 ? 'true' : 'false';
                    clients.forEach((client, socket) => {
                        socket.write(result);
                    });
                    words.length = 0;
                }
            }
        });
    });
    server.on('error', (err) => {
        console.error(`Ocorreu um erro no servidor: ${err.message}`);
    });
    server.listen(3000, () => {
        console.log('Servidor inicializado na porta 3000');
    });
}
exports.server = server;
server();
