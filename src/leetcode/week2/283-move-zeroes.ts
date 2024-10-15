/**
 * TODO:
 * 283. Move Zeroes
 * Algorithm: Snowball
 * https://leetcode.com/problems/move-zeroes/
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