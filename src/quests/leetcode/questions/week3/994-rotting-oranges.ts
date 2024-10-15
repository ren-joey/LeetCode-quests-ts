/**
 * TODO:
 * 994. Rotting Oranges
 * Algorithm: Matrix, DFS
 * https://leetcode.com/problems/rotting-oranges/
 */

export const orangesRotting = (grid: number[][]): number => {
    const w = grid[0].length;
    const h = grid.length;
    const rotten_queue: number[][] = [];
    let fresh_count = 0;

    const dfs = (y: number, x: number) => {
        if (x >= 0 && x < w
            && y >= 0 && y < h
            && grid[y][x] === 1) {
            fresh_count -= 1;
            grid[y][x] = 2;
            rotten_queue.push([y, x]);
        }
    };

    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (grid[y][x] === 1) fresh_count += 1;
            else if (grid[y][x] === 2) rotten_queue.push([y, x]);
        }
    }

    let minutes = 0;
    while (rotten_queue.length > 0 && fresh_count > 0) {
        minutes += 1;

        const len = rotten_queue.length;
        for (let i = 0; i < len; i += 1) {
            const [y, x] = rotten_queue.shift() as number[];
            dfs(y-1, x);
            dfs(y, x-1);
            dfs(y+1, x);
            dfs(y, x+1);
        }
    }

    return fresh_count === 0 ? minutes : -1;
};