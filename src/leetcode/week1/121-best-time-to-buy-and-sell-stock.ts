/**
 * TODO:
 * 121. Best Time to Buy and Sell Stock
 * Algorithm: Kadane's Algorithm, Pointers
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

export const maxProfit = (prices: number[]): number => {
    let max_profit = 0;
    // const length = prices.length;
    let left_idx = 0, right_idx = 1;

    while (left_idx < prices.length && right_idx < prices.length) {
        const buy = prices[left_idx], sell = prices[right_idx];
        const profit = sell - buy;
        if (profit > max_profit) max_profit = profit;
        if (sell <= buy) left_idx += 1;
        else right_idx += 1;
        if (left_idx === right_idx) right_idx += 1;
    }

    return max_profit;
};