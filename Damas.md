# Regras de Damas

A grande diagonal (escura), deve ficar sempre à esquerda de cada jogador. O objetivo do jogo é imobilizar ou capturar todas as peças do adversário.

```ascii

   A  B  C  D  E  F  G  H
8 ███ ○ ███ ○ ███ ○ ███ ○  8
7  ○ ███ ○ ███ ○ ███ ○ ███ 7
6 ███ ○ ███ ○ ███ ○ ███ ○  6
5    ███   ███   ███   ███ 5
4 ███   ███   ███   ███    4
3  ● ███ ● ███ ● ███ ● ███ 3
2 ███ ● ███ ● ███ ● ███ ●  2
1  ● ███ ● ███ ● ███ ● ███ 1
   A  B  C  D  E  F  G  H

```

A pedra anda só para frente, uma casa de cada vez.

A captura é obrigatória. Se no mesmo lance se apresentar mais de um modo de capturar, é obrigatório executar o lance que capture o maior número de peças (Lei da Maioria).

A pedra que durante o lance de captura de várias peças, apenas passe por qualquer casa de coroação, sem aí parar, não será promovida à dama.

## Esquema de adjacentes

```ascii

null | 2 ->  x ███ x  <- 3 | null
            ███ x ███
null | 0 ->  x ███ x  <- 1 | null

```