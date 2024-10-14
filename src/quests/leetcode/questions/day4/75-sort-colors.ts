/**
 * 75. Sort Colors
 * Algorithm: In-place Sort
 * https://leetcode.com/problems/sort-colors/
 */

/**
 Do not return anything, modify nums in-place instead.
 */

export const sortColors = (nums: number[]): void => {
    let l = 0;
    let r = nums.length - 1;
    let switchTimes = Infinity;
    while (switchTimes !== 0) {
        let count = 0;
        while (nums[r] === 2) r -= 1;
        while (nums[l] === 0) l += 1;
        for (let i = l; i <= r; i += 1) {
            if (nums[i] === 0) {
                nums[i] = nums[l];
                nums[l] = 0;
                l += 1;
                count += 1;
            } else if (nums[i] === 2) {
                nums[i] = nums[r];
                nums[r] = 2;
                r -= 1;
                count += 1;
            }
        }
        switchTimes = count;
    }
};