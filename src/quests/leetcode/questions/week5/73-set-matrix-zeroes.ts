/**
 * TODO:
 * 73. Set Matrix Zeroes
 * Algorithm: 2d array
 * https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 *
 * Example 1:
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[1,0,1],[0,0,0],[1,0,1]]
 *
 * Example 2:
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -231 <= matrix[i][j] <= 231 - 1
 *
 * Follow up:
 * A straightforward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
export const setZeroes = (matrix: number[][]): void => {
    const h = matrix.length;
    const w = matrix[0].length;
    const queue: number[][] = [];

    const replacer = (x: number, y: number, ox: number, oy: number) => {
        if (x < 0 || x >= w || y < 0 || y >= h) return;
        if (ox === 0 && oy === 0) {
            replacer(x - 1, y, -1, 0);
            replacer(x + 1, y, 1, 0);
            replacer(x, y - 1, 0, -1);
            replacer(x, y + 1, 0, 1);
        } else {
            matrix[y][x] = 0;
            if (ox !== 0) replacer(x + ox, y, ox, oy);
            else if (oy !== 0) replacer(x, y + oy, ox, oy);
        }
    };

    for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
            if (matrix[y][x] === 0) queue.push([y, x]);
        }
    }

    while (queue.length > 0) {
        const [y, x] = queue.pop() as number[];
        replacer(x, y, 0, 0);
    }
};