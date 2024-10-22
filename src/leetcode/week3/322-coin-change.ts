/**
 * TODO:
 * 322. Coin Change
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/coin-change/
 *
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Example 1:
 *      Input: coins = [1,2,5], amount = 11
 *      Output: 3
 *      Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 *      Input: coins = [2], amount = 3
 *      Output: -1
 *
 * Example 3:
 *      Input: coins = [1], amount = 0
 *      Output: 0
 *
 * Constraints:
 *      1 <= coins.length <= 12
 *      1 <= coins[i] <= 231 - 1
 *      0 <= amount <= 104
 */

export const coinChange = (coins: number[], amount: number): number => {
    const max = new Array(amount + 1).fill(amount + 1);
    max[0] = 0;

    for (let i = 1; i < amount + 1; i += 1) {
        coins.forEach((coin) => {
            if (i - coin >= 0) {
                max[i] = Math.min(max[i], 1 + max[i - coin]);
            }
        });
    }

    return max[max.length - 1] !== amount + 1 ? max[max.length - 1] : -1;
};
