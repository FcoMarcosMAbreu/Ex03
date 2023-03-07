import { User } from './User';
import { Exist2Users } from './Exist2Users';

const user1 = User('user1', 'pass1');
const user2 = User('user2', 'pass2');

const users = [user1, user2];

const existTwoUsers = Exist2Users(users);

console.log(existTwoUsers);
