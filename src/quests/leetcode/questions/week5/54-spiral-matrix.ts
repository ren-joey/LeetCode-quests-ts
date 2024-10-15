/**
 * 54. Spiral Matrix
 * Algorithm: 2d array
 * https://leetcode.com/problems/spiral-matrix/
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */

export const spiralOrder = (matrix: number[][]): number[] => {
    const h = matrix.length;
    const w = matrix[0].length;
    const states: boolean[][] = new Array(h).fill(0).map(() => new Array(w).fill(false));
    const res: number[] = [];

    const walk = (x: number, y: number, direction: number) => {
        if (x < 0 || x >= w || y < 0 || y >= h || states[y][x]) return;
        res.push(matrix[y][x]);
        states[y][x] = true;
        if (direction === 0) {
            if (x + 1 >= w || states[y][x + 1]) walk(x, y + 1, direction + 1);
            else walk(x + 1, y, direction);
        } else if (direction === 1) {
            if (y + 1 >= h || states[y + 1][x]) walk(x - 1, y, direction + 1);
            else walk(x, y + 1, direction);
        } else if (direction === 2) {
            if (x - 1 < 0 || states[y][x - 1]) walk(x, y - 1, direction + 1);
            else walk(x - 1, y, direction);
        } else if (direction === 3) {
            if (y - 1 < 0 || states[y - 1][x]) walk(x + 1, y, 0);
            else walk(x, y - 1, direction);
        }
    };

    walk(0, 0, 0);

    return res;
};