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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const net = __importStar(require("net"));
const readline_1 = __importDefault(require("readline"));
function client(id) {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const client = new net.Socket();
    const clientInfo = { id, socket: client };
    client.connect(3000, 'localhost', () => {
        console.log(`Conectado ao servidor como cliente ${id}`);
    });
    client.on('data', (data) => {
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
exports.client = client;
client('cliente1');
