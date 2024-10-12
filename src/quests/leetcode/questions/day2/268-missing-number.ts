/**
 * 268. Missing Number
 * Algorithm: Array
 * https://leetcode.com/problems/missing-number/
 */

export const missingNumber = (nums: number[]): number => {
    const cal: number [] = new Array(nums.length + 1);
    nums.forEach((num) => {
        cal[num] = num;
    });
    for (let i = 0; i < cal.length; i += 1) {
        if (cal[i] === undefined) return i;
    }

    throw new Error('Invalid input: missingNumber');
};

export const missingNumber_sum = (nums: number[]): number => {
    let res = 0;
    nums.forEach((num, idx) => {
        res += idx - num;
    });
    return res + nums.length;
};
