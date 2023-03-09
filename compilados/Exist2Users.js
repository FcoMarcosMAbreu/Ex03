"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exist2Users = void 0;
// import { User } from './User'
function Exist2Users(users) {
    if (users.length === 2) {
        return true;
    }
    else {
        return false;
    }
}
exports.Exist2Users = Exist2Users;
