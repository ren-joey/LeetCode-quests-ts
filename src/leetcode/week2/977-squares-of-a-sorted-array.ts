/**
 * TODO:
 * 977. Squares of a Sorted Array
 * Algorithm: Array
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 * Example 1:
 *      Input: nums = [-4,-1,0,3,10]
 *      Output: [0,1,9,16,100]
 *      Explanation: After squaring, the array becomes [16,1,0,9,100].
 *      After sorting, it becomes [0,1,9,16,100].
 *
 * Example 2:
 *      Input: nums = [-7,-3,2,3,11]
 *      Output: [4,9,9,49,121]
 *
 * Constraints:
 *      1 <= nums.length <= 104
 *      -104 <= nums[i] <= 104
 *      nums is sorted in non-decreasing order.
 *
 * Follow up:
 *      Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */

export const sortedSquares = (nums: number[]): number[] => {
    const square_nums = new Array(nums.length);
    let ptr = nums.length - 1;
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const l_square = Math.pow(nums[l], 2);
        const r_square = Math.pow(nums[r], 2);
        if (l_square > r_square) {
            square_nums[ptr] = l_square;
            ptr -= 1;
            l += 1;
        } else if (r_square >= l_square) {
            square_nums[ptr] = r_square;
            ptr -= 1;
            r -= 1;
        }
    }

    return square_nums;
};