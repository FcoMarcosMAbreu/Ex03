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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meuClient = void 0;
const net = __importStar(require("net"));
const readline_1 = __importDefault(require("readline"));
function escolherNomeJogador() {
    return new Promise((resolve) => {
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('Digite seu nome: ', (id) => {
            rl.close();
            resolve(id);
        });
    });
}
function meuClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const id = yield escolherNomeJogador();
        const client = new net.Socket();
        client.connect(4000, 'localhost', () => {
            // console.log(`Conectado ao servidor como cliente ${id}`);
            client.write(`ID:${id}`);
        });
        client.on('data', (data) => {
            const msgDoServidor = data.toString().trim();
            if (msgDoServidor.startsWith('RESULT:')) {
                const result = msgDoServidor.slice('RESULT:'.length);
                // console.log(`> Resultado para cliente ${id}: ${result}`);
                console.log(`> ${result}`);
            }
            else {
                console.log(`> Mensagem do servidor para cliente ${id}: ${msgDoServidor}`);
            }
        });
        client.on('error', (err) => {
            console.error(`Erro ao conectar ao servidor: ${err.message}`);
        });
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.on('line', (input) => {
            const letra = input.trim().split('');
            if (letra.length === 1) {
                client.write(`${letra[0]}`);
            }
            else if (input === 'desconectar') {
                client.write(input);
            }
            else {
                console.log('> Digite apenas uma letra');
            }
        });
        client.on('close', () => {
            console.log(`Conexão com o servidor encerrada para o cliente ${id}`);
            process.exit();
        });
    });
}
exports.meuClient = meuClient;
meuClient();
