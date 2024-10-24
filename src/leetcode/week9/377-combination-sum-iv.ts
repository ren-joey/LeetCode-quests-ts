/**
 * 377. Combination Sum IV
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/combination-sum-iv/
 *
 * Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 *
 * Example 1:
 *      Input: nums = [1,2,3], target = 4
 *      Output: 7
 *      Explanation:
 *      The possible combination ways are:
 *      (1, 1, 1, 1)
 *      (1, 1, 2)
 *      (1, 2, 1)
 *      (1, 3)
 *      (2, 1, 1)
 *      (2, 2)
 *      (3, 1)
 *      Note that different sequences are counted as different combinations.
 *
 * Example 2:
 *      Input: nums = [9], target = 3
 *      Output: 0
 *
 * Constraints:
 *      1 <= nums.length <= 200
 *      1 <= nums[i] <= 1000
 *      All the elements of nums are unique.
 *      1 <= target <= 1000
 *
 * Follow up:
 *      What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?
 *
 * References:
 *      https://leetcode.com/problems/combination-sum-iv/solutions/85036/1ms-java-dp-solution-with-detailed-explanation/
 */

export const combinationSum4 = (nums: number[], target: number): number => {
    const dp: number[] = new Array(target + 1).fill(-1);
    dp[0] = 1;

    const helper = (nums: number[], target: number): number => {
        if (dp[target] !== -1) {
            return dp[target];
        }
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            if (target >= nums[i]) {
                res += helper(nums, target - nums[i]);
            }
        }
        dp[target] = res;
        return res;
    };

    return helper(nums, target);
};

export const combinationSum4_brute_force = (nums: number[], target: number): number => {
    if (target === 0) return 1;
    else if (target < 0) return 0;

    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target >= nums[i]) {
            res += combinationSum4_brute_force(nums, target - nums[i]);
        }
    }

    return res;
};