/* interface Board {
    color: string;
    adjacent?: any[];
    filled?: boolean;
    piece?: string;
} */
/* type BoardFunction = () => void;
export default function board(fn: BoardFunction) { */
export default function board() {
    let board = [
        [ // Fileira 1
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
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
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            }
        ],
        [ // Fileira 3
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "●"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
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
                adjacent: <any | null>[],
                filled: false,
                piece: ""
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: false,
                piece: ""
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: false,
                piece: ""
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: false,
                piece: ""
            }
        ],
        [ // Fileira 5
            {
                color: " ",
                adjacent: <any | null>[],
                filled: false,
                piece: ""
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: false,
                piece: ""
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: false,
                piece: ""
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
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
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            }
        ],
        [ // Fileira 7
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
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
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
                filled: true,
                piece: "○"
            },
            {
                color: "█"
            },
            {
                color: " ",
                adjacent: <any | null>[],
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

    return board
}