/**
 * 1197. Minimum Knight Moves
 * Algorithm: BFS
 * https://leetcode.com/problems/minimum-knight-moves/
 *
 * In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].
 * A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.
 * Return the minimum number of steps needed to move the knight to the square [x, y]. It is guaranteed the answer exists.
 *
 * Example 1:
 *      Input: x = 2, y = 1
 *      Output: 1
 *      Explanation: [0, 0] → [2, 1]
 *
 * Example 2:
 *      Input: x = 5, y = 5
 *      Output: 4
 *      Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
 * Constraints:
 *      -300 <= x, y <= 300
 *      0 <= |x| + |y| <= 300
 *
 * References:
 *      https://www.cnblogs.com/cnoodle/p/12820573.html
 */

const calDistance = (start: [number, number], end: [number, number]): number => {
    return Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2);
};

export const minKnightMoves = (x: number, y: number): number => {
    const direction = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
    const dp = Array.from({ length: 601 }, () => Array.from({ length: 601 }, () => Infinity));

    x = x + 300;
    y = y + 300;
    const longestDistance =  calDistance([x, y], [300, 300]) + 16;

    const dfs = (_x: number, _y: number, steps: number): void => {
        steps = steps + 1;
        if (_x < 0 || _y < 0 || _x > 600 || _y > 600) return;
        if (steps >= dp[_x][_y]) return;

        dp[_x][_y] = steps;

        direction.forEach(([dx, dy]) => {
            const to = [_x + dx, _y + dy];
            const distance = calDistance([to[0], to[1]], [300, 300]) + calDistance([to[0], to[1]], [x, y]);
            if (distance > longestDistance) return;

            dfs(to[0], to[1], steps);
        });
    };

    dfs(300, 300, -1);

    return dp[x][y];
};