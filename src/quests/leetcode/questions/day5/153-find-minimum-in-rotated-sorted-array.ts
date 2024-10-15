/**
 * TODO:
 * 153. Find Minimum in Rotated Sorted Array
 * Algorithm: Binary Search
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */

export const findMin = (nums: number[]): number => {
    let l = 0;
    let r = nums.length - 1;
    let min = Infinity;
    let center = -1;

    while(l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] < min) {
            if (center === -1) center = mid;
            r = mid - 1;
            min = nums[mid];
        } else {
            l = mid + 1;
        }

        if (mid === 0 && nums[mid] === min) {
            l = center + 1;
            r = nums.length - 1;
        }
    }

    return min;
};