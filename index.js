/* import board from './board'; */

let board = [
    [ // Fileira 1
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
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
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        }
    ],
    [ // Fileira 3
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "●"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
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
            adjacent: [],
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: false,
            piece: ""
        }
    ],
    [ // Fileira 5
        {
            color: " ",
            adjacent: [],
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: false,
            piece: ""
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
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
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        }
    ],
    [ // Fileira 7
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
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
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        },
        {
            color: "█"
        },
        {
            color: " ",
            adjacent: [],
            filled: true,
            piece: "○"
        }
    ]
]

//adjacent: [board[1, 1], board[3, 1], board[1, 3], board[3, 3]],

/* let boardInstance = board */

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
