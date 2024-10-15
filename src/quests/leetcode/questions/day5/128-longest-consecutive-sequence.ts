/**
 * FIXME:
 * 128. Longest Consecutive Sequence
 * Algorithm: Array
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 *
 * Example 2:
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 *
 * Constraints:
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */

export const longestConsecutive = (nums: number[]): number => {
    if (nums.length === 0) return 0;

    nums = nums.sort((a, b) => a - b);
    let max = 1;
    let current_max = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] === nums[i-1]) continue;
        if (nums[i] === (nums[i-1] + 1)) {
            current_max += 1;
            max = Math.max(max, current_max);
        } else {
            current_max = 1;
        }
    }
    return max;
};