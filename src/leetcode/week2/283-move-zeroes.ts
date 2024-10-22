/**
 * TODO:
 * 283. Move Zeroes
 * Algorithm: Snowball
 * https://leetcode.com/problems/move-zeroes/
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 *      Input: nums = [0,1,0,3,12]
 *      Output: [1,3,12,0,0]
 *
 * Example 2:
 *      Input: nums = [0]
 *      Output: [0]
 *
 * Constraints:
 *      1 <= nums.length <= 104
 *      -231 <= nums[i] <= 231 - 1
 *
 * Follow up:
 *      Could you minimize the total number of operations done?
 */

/**
 Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = (nums: number[]): void => {
    let ballSize = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) ballSize += 1;
        else if (ballSize > 0) {
            const t = nums[i];
            nums[i - ballSize] = t;
            nums[i] = 0;
        }
    }
};