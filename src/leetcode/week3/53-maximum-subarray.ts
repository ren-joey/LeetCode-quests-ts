/**
 * TODO:
 * 53. Maximum Subarray
 * Algorithm: Dynamic Programming, Tabulation
 * https://leetcode.com/problems/maximum-subarray/
 */

// if first slot is negative, continue
// first positive slot accumulated in memory[0]

export const maxSubArray = (nums: number[]): number => {
    // const memory = new Array(2).fill(0).map(() => new Array(nums.length).fill(-1));

    // const solve = (i, isPick) => {
    //     if (i >= nums.length) return isPick ? 0 : -Infinity;
    //     if (memory[+isPick][i] !== -1) return memory[+isPick][i];

    //     if (isPick) memory[+isPick][i] = Math.max(nums[i] + solve(i+1, true), 0);
    //     else memory[+isPick][i] = Math.max(nums[i] + solve(i+1, true), solve(i+1, false));
    //     return memory[+isPick][i];
    // }

    // return solve(0, false);


    const table = new Array(2).fill(0).map(() => new Array(nums.length).fill(-1));
    table[0][0] = nums[0];
    table[1][0] = nums[0];
    for (let i = 1; i < nums.length; i += 1) {
        table[0][i] = Math.max(nums[i], nums[i] + table[0][i-1]);
        table[1][i] = Math.max(table[0][i], table[1][i-1]);
    }
    return table[1][nums.length -1];
};
