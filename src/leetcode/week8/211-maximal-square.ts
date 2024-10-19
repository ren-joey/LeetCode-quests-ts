/**
 * 211. Maximal Square
 * Algorithm: DP
 * https://leetcode.com/problems/maximal-square/
 *
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 *
 * Example 1:
 *      Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 *      Output: 4
 *
 * Example 2:
 *      Input: matrix = [["0","1"],["1","0"]]
 *      Output: 1
 *
 * Example 3:
 *      Input: matrix = [["0"]]
 *      Output: 0
 *
 * Constraints:
 *      m == matrix.length
 *      n == matrix[i].length
 *      1 <= m, n <= 300
 *      matrix[i][j] is '0' or '1'.
 *
 * References:
 *    https://leetcode.com/problems/maximal-square/discuss/61803/C%2B%2B-space-optimized-DP
 */

export const maximalSquare = (matrix: string[][]): number => {
    if (!matrix || matrix.length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    const dp: number[][] = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
    let maxSide = 0;

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (matrix[r][c] === '1') {
                dp[r + 1][c + 1] = Math.min(dp[r][c], dp[r + 1][c], dp[r][c + 1]) + 1;
                maxSide = Math.max(maxSide, dp[r + 1][c + 1]);
            }
        }
    }

    return maxSide * maxSide;
};