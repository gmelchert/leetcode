/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const rows = board.length - 1;
    const columns = board[0].length - 1;
    const indexesToChange = []

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= columns; j++) {
            const number = board[i][j];
            let liveNeighbors = 0;

            // check top
            if (i > 0) {
                if (board[i - 1][j]) liveNeighbors++;
            }

            // check bottom
            if (i < rows) {
                if (board[i + 1][j]) liveNeighbors++;
            }

            // check left
            if (j > 0) {
                if (board[i][j - 1]) liveNeighbors++;

                if (i > 0) {
                    if (board[i - 1][j - 1]) liveNeighbors++;
                }

                if (i < rows) {
                    if (board[i + 1][j - 1]) liveNeighbors++;
                }
            }

            // check right
            if (j < columns) {
                if (board[i][j + 1]) liveNeighbors++;

                if (i > 0) {
                    if (board[i - 1][j + 1]) liveNeighbors++;
                }

                if (i < rows) {
                    if (board[i + 1][j + 1]) liveNeighbors++;
                }
            }

            if (number === 1) {
                if (liveNeighbors < 2) {
                    indexesToChange.push({ row: i, column: j, value: 0 });
                } else if (liveNeighbors > 3) {
                    indexesToChange.push({ row: i, column: j, value: 0 });
                }
            } else {
                if (liveNeighbors === 3) {
                    indexesToChange.push({ row: i, column: j, value: 1 });
                }
            }
        }
    }

    indexesToChange.forEach(({ row, column, value }) => {
        board[row][column] = value;
    });
};

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);