/**
 * 213. House Robber II
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/house-robber-ii/
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 *
 * Example 1:
 * Input: nums = [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
 *
 * Example 2:
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 * Example 3:
 * Input: nums = [1,2,3]
 * Output: 3
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 1000
 */

export const rob = (nums: number[]): number => {
    if (nums.length <= 1) return nums[0] || 0;

    const len = nums.length - 1;
    const case1 = nums.slice(1);
    const case2 = nums.slice(0, len);
    const dp1 = new Array(len).fill(0);
    const dp2 = new Array(len).fill(0);

    for (let i = 0; i < len; i += 1) {
        const num = case1[i];
        dp1[i] = Math.max(
            num + (dp1[i-2] || 0),
            num + (dp1[i-3] || 0)
        );
    }

    for (let i = 0; i < len; i += 1) {
        const num = case2[i];
        dp2[i] = Math.max(
            num + (dp2[i-2] || 0),
            num + (dp2[i-3] || 0)
        );
    }

    return Math.max(...dp1, ...dp2);
};