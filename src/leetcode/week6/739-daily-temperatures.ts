/**
 * TODO:
 * 739. Daily Temperatures
 * Algorithm: Stack
 * https://leetcode.com/problems/daily-temperatures/
 *
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 *
 * Example 1:
 *       Input: temperatures = [73,74,75,71,69,72,76,73]
 *       Output: [1,1,4,2,1,1,0,0]
 *
 * Example 2:
 *       Input: temperatures = [30,40,50,60]
 *       Output: [1,1,1,0]
 *
 * Example 3:
 *       Input: temperatures = [30,60,90]
 *       Output: [1,1,0]
 *
 * Constraints:
 *       1 <= temperatures.length <= 105
 *       30 <= temperatures[i] <= 100
 */

export const dailyTemperatures = (temps: number[]): number[] => {
    const results: number[] = new Array(temps.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temps.length; i++) {
        while (stack.length > 0
            && temps[stack[stack.length - 1]] < temps[i]
        ) {
            const index = stack.pop()!;
            results[index] = i - index;
        }
        stack.push(i);
    }

    return results;
};