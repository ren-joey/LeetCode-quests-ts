/**
 * 977. Squares of a Sorted Array
 * Algorithm: Array
 * https://leetcode.com/problems/squares-of-a-sorted-array/
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