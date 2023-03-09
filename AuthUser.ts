// import { User } from './User'
export function validateUser(user: { login: string, password: string }): boolean {
   if (user.login === "user" && user.password === "12345") {
      // obviamente uma forma melhor de autenticação deve ser colocada aqui
      return true;
   } else {
      return false;
   }
}
