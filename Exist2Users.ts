import { User } from './User'
export function Exist2Users(users: { login: string, password: string }[]): boolean {
   if (users.length === 2) {
      return true;
   } else {
      return false;
   }
}