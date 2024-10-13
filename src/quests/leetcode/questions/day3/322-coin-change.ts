/**
 * TODO:
 * 322. Coin Change
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/coin-change/
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
