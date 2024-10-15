/**
 * 62. Unique Paths
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/unique-paths/
 *
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The test cases are generated so that the answer will be less than or equal to 2 * 109.
 *
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 *
 * Example 2:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 *
 * Constraints:
 * 1 <= m, n <= 100
 */

export const uniquePaths = (m: number, n: number): number => {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = 1;

    for (let y = 0; y < m; y += 1) {
        for (let x = 0; x < n; x += 1) {
            if (x === 0 && y === 0) continue;
            else if (x === 0) dp[y][x] = dp[y-1][x];
            else if (y === 0) dp[y][x] = dp[y][x-1];
            else dp[y][x] = dp[y-1][x] + dp[y][x-1];
        }
    }

    return dp[m-1][n-1];
};