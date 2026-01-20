/**
Do not return anything, modify matrix in-place instead.
*/
function setZeroes(matrix: number[][]): void {
    const rowsToZero = new Set<number>();
    const columnsToZero = new Set<number>();

    const rows = matrix.length;
    const columns = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const number = matrix[i][j];
            if (number === 0) {
                rowsToZero.add(i);
                columnsToZero.add(j);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        columnsToZero.forEach(col => {
            matrix[i][col] = 0;
        })
    }

    for (let j = 0; j < columns; j++) {
        rowsToZero.forEach(row => {
            matrix[row][j] = 0;
        })
    }
};