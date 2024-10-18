/**
 * TODO:
 * 525. Contiguous Array
 * Algorithm: Hash Table
 * https://leetcode.com/problems/contiguous-array/
 *
 * Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
 *
 * Example 1:
 *      Input: nums = [0,1]
 *      Output: 2
 *      Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
 *
 * Example 2:
 *      Input: nums = [0,1,0]
 *      Output: 2
 *      Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 * Constraints:
 *      1 <= nums.length <= 105
 *      nums[i] is either 0 or 1.
 */

export const findMaxLength = (nums: number[]): number => {
    const n = nums.length;
    const map: { [key: number]: number } = {};
    let sum = 0;
    let subArrayLength = 0;

    for (let i = 0; i < n; i += 1) {
        sum += nums[i] === 0 ? -1 : 1;

        // If the sum is 0, it means the subarray from index 0 to i has equal number of 0's and 1's.
        if (sum === 0) {
            subArrayLength = i + 1;
        }

        // If the sum is already present in the map,
        // it means the subarray from index map[sum] to i has equal number of 0's and 1's.
        else if (sum in map) {
            subArrayLength = Math.max(subArrayLength, i - map[sum]);
        }

        // If the sum is not present in the map, store the sum with its index.
        else {
            map[sum] = i;
        }
    }

    return subArrayLength;
};