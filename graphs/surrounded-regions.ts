/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (r: number, c: number) => {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            board[r][c] !== `O`
        ) {
            return;
        }

        board[r][c] = '#';

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r in board) {
        dfs(+r, 0);
        dfs(+r, cols - 1);
    }

    for (let c in board[0]) {
        dfs(0, +c);
        dfs(rows-1, +c);
    }

    for (let r in board) {
        for (let c in board[0]) {
            if (board[r][c] === '#') {
                board[r][c] = 'O';
            } else if (board[r][c]) {
                board[r][c] = 'X';
            }
        }
    }
};