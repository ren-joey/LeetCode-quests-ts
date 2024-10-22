/**
 * TODO:
 * 704. Binary Search
 * Algorithm: Binary Search
 * https://leetcode.com/problems/binary-search/
 */

export const search = (nums: number[], target: number): number => {
    let right = nums.length - 1;
    let left = 0;

    while (left < right) {
        const idx = Math.floor((right + left + 1) / 2);
        if (target < nums[idx]) {
            right = idx - 1;
        } else {
            left = idx;
        }
    }

    return nums[left] === target ? left : -1;
};