/**
 * 55. Jump Game
 * Algorithm: Greedy
 * https://leetcode.com/problems/jump-game/
 *
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 *
 * Example 1:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 *
 * Constraints:
 * 1 <= nums.length <= 104
 * 0 <= nums[i] <= 105
 */

export const canJump = (nums: number[]): boolean => {
    const len = nums.length;
    const dp = new Array(len).fill(false);
    dp[0] = true;

    for (let i = 0; i < len - 1; i += 1) {
        if (!dp[i]) break;
        else if (i + nums[i] >= len - 1) {
            dp[len - 1] = true;
            break;
        }
        else {
            for (let j = i + nums[i]; j >= i + 1 ; j -= 1) {
                if (dp[j]) break;
                else dp[j] = true;
            }
        }
    }

    return dp[len - 1];
};