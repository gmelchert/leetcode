function numIslands(grid: string[][]): number {
    if (grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    const dfs = (r: number, c: number): void => {
        // Out of bounds or water
        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            grid[r][c] === '0'
        ) {
            return;
        }

        // Mark land as visited (sink it)
        grid[r][c] = '0';

        // Explore neighbors
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islands++;
                dfs(r, c);
            }
        }
    }

    return islands;
}
