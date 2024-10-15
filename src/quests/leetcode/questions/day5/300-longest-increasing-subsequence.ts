/**
 * TODO:
 * 300. Longest Increasing Subsequence
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 *
 * Example 1:
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 * Example 2:
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 2500
 * -104 <= nums[i] <= 104
 */

export const lengthOfLIS = (nums: number[]): number => {
    const len = nums.length;
    const dp: number[] = new Array(len).fill(1);

    for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[i] > nums[j] && dp[i] < (dp[j] + 1)) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    return Math.max(...dp);

    // if (nums.length === 1) return 1;

    // const records: number[][] = new Array(nums.length).fill([]);
    // let max = 0;

    // const goSearch = (picked: number[], i: number, isPick) => {
    //     if (i >= picked.length) max = Math.max(max, picked.length);

    //     if (!isPick) {
    //         goSearch(picked, i + 1, true);
    //         goSearch(picked, i + 1, false);
    //     }
    //     if ((picked.length === 0
    //         || picked[picked.length - 1] < nums[i])
    //         && isPick) {
    //         picked.push(nums[i]);
    //         goSearch(picked, i + 1, true);
    //         goSearch(picked, i + 1, false);
    //         picked.pop();
    //     }
    // };

    // goSearch([], 0, false);
    // goSearch([], 0, true);

    // return max;
};
