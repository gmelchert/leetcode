function rotate(matrix: number[][]): void {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            console.log(`Swapping (${i},${j}) with (${j},${i})`);
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let c = 0; c < matrix.length; c++) {
        matrix[c].reverse();
    }
    console.log(matrix);
};
rotate([[1,2,3],[4,5,6],[7,8,9]]);

// rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);