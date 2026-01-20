function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({ length: 9 }, () => new Set());
    const columns = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const number = board[i][j];

            if (number === '.') {
                continue;
            }

            const boxIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);

            if (
                rows[i].has(number) ||
                columns[j].has(number) ||
                boxes[boxIndex].has(number)
            ) {
                return false;
            }

            rows[i].add(number);
            columns[j].add(number);
            boxes[boxIndex].add(number);
        }
    }

    return true;
};

console.log(isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
));

console.log(isValidSudoku(
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
));