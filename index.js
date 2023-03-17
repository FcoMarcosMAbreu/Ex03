/* import board from './board'; */
/* import readline from 'readline'; */
/* import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process'; */

let board = [
    [ // Fileira 1
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        }
    ],
    [ // Fileira 2
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        }
    ],
    [ // Fileira 3
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        }
    ],
    [ // Fileira 4
        {
            color: "█"
        },
        {
            color: " ",
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: false,
            piece: ""
        }
    ],
    [ // Fileira 5
        {
            color: " ",
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: false,
            piece: ""
        },
        {
            color: "█"
        }
    ],
    [ // Fileira 6
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        }
    ],
    [ // Fileira 7
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        }
    ],
    [ // Fileira 8
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            filled: true,
            piece: "○"
        }
    ]
]

board[0][0].adjacent = [null,        null,        null,        board[1][1]]
board[0][2].adjacent = [null,        null,        board[1][1], board[1][3]]
board[0][4].adjacent = [null,        null,        board[1][3], board[1][5]]
board[0][6].adjacent = [null,        null,        board[1][5], board[1][7]]

board[1][1].adjacent = [board[0][0], board[0][2], board[2][0], board[2][2]]
board[1][3].adjacent = [board[0][2], board[0][4], board[2][2], board[2][4]]
board[1][5].adjacent = [board[0][4], board[0][6], board[2][4], board[2][6]]
board[1][7].adjacent = [board[0][6], null,        board[2][6], null       ]

board[2][0].adjacent = [null,        board[1][1], null,        board[3][1]]
board[2][2].adjacent = [board[1][1], board[1][3], board[3][1], board[3][3]]
board[2][4].adjacent = [board[1][3], board[1][5], board[3][3], board[3][5]]
board[2][6].adjacent = [board[1][5], board[1][7], board[3][5], board[3][7]]

board[3][1].adjacent = [board[2][0], board[2][2], board[4][0], board[4][2]]
board[3][3].adjacent = [board[2][2], board[2][4], board[4][2], board[4][4]]
board[3][5].adjacent = [board[2][4], board[2][6], board[4][4], board[4][6]]
board[3][7].adjacent = [board[2][6], null,        board[4][6], null       ]

board[4][0].adjacent = [null,        board[3][1], null,        board[5][1]]
board[4][2].adjacent = [board[3][1], board[3][3], board[5][1], board[5][3]]
board[4][4].adjacent = [board[3][3], board[3][5], board[5][3], board[5][5]]
board[4][6].adjacent = [board[3][5], board[3][7], board[5][5], board[5][7]]

board[5][1].adjacent = [board[4][0], board[4][2], board[6][0], board[6][2]]
board[5][3].adjacent = [board[4][2], board[4][4], board[6][2], board[6][4]]
board[5][5].adjacent = [board[4][4], board[4][6], board[6][4], board[6][6]]
board[5][7].adjacent = [board[4][6], null,        board[6][6], null       ]

board[6][0].adjacent = [null,        board[5][1], null,        board[7][1]]
board[6][2].adjacent = [board[5][1], board[5][3], board[7][1], board[7][3]]
board[6][4].adjacent = [board[5][3], board[5][5], board[7][3], board[7][5]]
board[6][6].adjacent = [board[5][5], board[5][7], board[7][5], board[7][7]]

board[7][1].adjacent = [board[6][0], board[6][2], null,        null       ]
board[7][3].adjacent = [board[6][2], board[6][4], null,        null       ]
board[7][5].adjacent = [board[6][4], board[6][6], null,        null       ]
board[7][7].adjacent = [board[6][6], null,        null,        null       ]

function showBoard() {
    console.log("   A  B  C  D  E  F  G  H");
    for(let row = 7; row >= 0; row--) {
        let rowString = ""
        board[row].map( house => {
            if (house.filled == true) rowString = rowString + house.color + house.piece + house.color
            else rowString = rowString + house.color + house.color + house.color
        } )
        console.log(
            (row + 1) + " " +
            rowString
            + " " + (row + 1)
        )
    }
    console.log("   A  B  C  D  E  F  G  H");
}

/* for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
        if (board[i][j].adjacent) console.log(board[i][j].adjacent)
    }
} */

//showBoard()

for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
        if (board[i][j].filled) {
            board[i][j].filled = false
            board[i][j].piece = ""
        }
    }
}

//showBoard()

/* board[1][1].filled = true
board[1][1].piece = "●" */

/* board[5][1].filled = true
board[5][1].piece = "●" */

board[1][5].filled = true
board[1][5].piece = "●"

showBoard()

let mineIs = "●" // Revisar isso!
/* let rawInput = "b2 c3" */
let rawInput = "f2 g3"

let fromColumn = null
let toColumn = null
let fromRow = null
let toRow = null
// let command = [] // Depreciado.

let validInput = false
let hasPiece = false
let belongsToMe = false
let isAdjacent = false
let freeWay = false

// Tratar a entrada
function treat(i) {
    let commandArrey = i.split(" ")
    // Origem válida?
        // 1º caractere
    switch (commandArrey[0][0]) {
        case "a":
        case "A":
            fromColumn = 0
            break
        case "b":
        case "B":
            fromColumn = 1
            break
        case "c":
        case "C":
            fromColumn = 2
            break
        case "d":
        case "D":
            fromColumn = 3
            break
        case "e":
        case "E":
            fromColumn = 4
            break
        case "f":
        case "F":
            fromColumn = 5
            break
        case "g":
        case "G":
            fromColumn = 6
            break
        case "h":
        case "H":
            fromColumn = 7
            break
        default:
            console.log("1º caractere inválido!")
            break
        }
        // 2º caractere
    if (commandArrey[0][1] < 1 || commandArrey[0][1] > 8) console.log("2º caractere inválido!")
    else fromRow = commandArrey[0][1] - 1
        // 3º caractere
    switch (commandArrey[1][0]) {
        case "a":
        case "A":
            toColumn = 0
            break
        case "b":
        case "B":
            toColumn = 1
            break
        case "c":
        case "C":
            toColumn = 2
            break
        case "d":
        case "D":
            toColumn = 3
            break
        case "e":
        case "E":
            toColumn = 4
            break
        case "f":
        case "F":
            toColumn = 5
            break
        case "g":
        case "G":
            toColumn = 6
            break
        case "h":
        case "H":
            toColumn = 7
            break
        default:
            console.log("3º caractere inválido!")
            break
        }
        // 4º caractere
    if (commandArrey[1][1] < 1 || commandArrey[1][1] > 8) console.log("4º caractere inválido!")
    else toRow = commandArrey[1][1] - 1
    // Tem peça?
    if (board[fromRow][fromColumn].filled) hasPiece = true 
    // É sua?
    if (board[fromRow][fromColumn].piece === mineIs) belongsToMe = true
    // Qual adjacente?
    if ((toColumn === (fromColumn + 1)) && ((toRow === (fromRow - 1)) || (toRow === (fromRow - 1)))) isAdjacent = true
    // Tá ocupado?
    if (board[toRow][toColumn].filled === false) freeWay = true
    // Por quem?
    // Pode capturar? (Adjacente do adjacente?)
    // ... Mais em breve ...
    if (hasPiece && belongsToMe && isAdjacent && freeWay) validInput = true
}

/* const rl = readline.createInterface({ input, output }); */

do {
    /* rawInput = await rl.question('Insira um comando válido: ')
    rl.close(); */
    treat(rawInput)
} while (validInput);

function move(a, b, c, d) {
    board[c][d].filled = board[a][b].filled
    board[c][d].piece = board[a][b].piece
    board[a][b].filled = false
    board[a][b].piece = ""
}

console.log(fromRow, fromColumn, toRow, toColumn)
move(fromRow, fromColumn, toRow, toColumn)

showBoard()
