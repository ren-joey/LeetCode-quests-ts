/**
 * TODO:
 * 1730. Shortest Path to Get Food
 * Algorithm: BFS
 * https://leetcode.com/problems/shortest-path-to-get-food/
 *
 * You are starving and you want to eat food as quickly as possible. You want to find the shortest path to arrive at any food cell.
 * You are given an m x n character matrix, grid, of these different types of cells:
 *      '*' is your location. There is exactly one '*' cell.
 *      '#' is a food cell. There may be multiple food cells.
 *      'O' is free space, and you can travel through these cells.
 *      'X' is an obstacle, and you cannot travel through these cells.
 * You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.
 * Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.
 *
 * Example 1:
 *      Input: grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
 *      Output: 3
 *      Explanation: It takes 3 steps to reach the food.
 *
 * Example 2:
 *      Input: grid = [["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]
 *      Output: -1
 *      Explanation: It is not possible to reach the food.
 *
 * Example 3:
 *      Input: grid = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]
 *      Output: 6
 *      Explanation: There can be multiple food cells. It only takes 6 steps to reach the bottom food.
 *
 * Example 4:
 *      Input: grid = [["O","*"],["#","O"]]
 *      Output: 2
 *
 * Example 5:
 *      Input: grid = [["X","*"],["#","X"]]
 *      Output: -1
 *
 * Constraints:
 *      m == grid.length
 *      n == grid[i].length
 *      1 <= m, n <= 200
 *      grid[row][col] is '*', 'X', 'O', or '#'.
 *      The grid contains exactly one '*'.
 *
 * References:
 *      https://www.cnblogs.com/cnoodle/p/15645191.html
 */

const DIRS: number[][] = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0]
];

export const getFood = (grid: string[][]): number => {
    const m = grid.length;
    const n = grid[0].length;
    const queue: [number, number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '*') {
                queue.push([i, j]);
                break;
            }
        }
    }

    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    let step = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()!;
            if (grid[x][y] === '#') {
                return step;
            }
            for (const [dx, dy] of DIRS) {
                const r = x + dx;
                const c = y + dy;
                if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] !== 'X' && !visited[r][c]) {
                    visited[r][c] = true;
                    queue.push([r, c]);
                }
            }
        }
        step += 1;
    }
    return -1;
};