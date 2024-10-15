/**
 * TODO:
 * 200. Number of Islands
 * Algorithm: Matrix, Depth-first Search
 * https://leetcode.com/problems/number-of-islands/
 */

export const numIslands = (grid: string[][]): number => {
    let res = 0;
    const h = grid.length;
    const w = grid[0].length;

    const dfs = (y: number, x: number) => {
        if (x >= 0 && x < w
            && y >= 0 && y < h
            && grid[y][x] === '1')  {
            grid[y][x] = '0';
            dfs(y, x+1);
            dfs(y+1, x);
            dfs(y, x-1);
            dfs(y-1, x);
        }
    };

    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (grid[y][x] === '1') {
                res += 1;
                dfs(y, x);
            }
        }
    }

    return res;
};