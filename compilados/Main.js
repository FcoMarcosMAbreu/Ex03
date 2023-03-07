"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Exist2Users_1 = require("./Exist2Users");
// Criação de dois usuários
const user1 = (0, User_1.User)('user1', 'pass1');
const user2 = (0, User_1.User)('user2', 'pass2');
// Array de usuários
const users = [user1, user2];
// Verifica se existem 2 usuários
const existTwoUsers = (0, Exist2Users_1.Exist2Users)(users);
// Exibe o resultado
console.log(existTwoUsers); // true
