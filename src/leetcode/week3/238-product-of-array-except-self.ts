/**
 * TODO:
 * 238. Product of Array Except Self
 * Algorithm: Array, Math
 * https://leetcode.com/problems/product-of-array-except-self/
 */

export const productExceptSelf = (nums: number[]): number[] => {
    let total = 1;
    const zeros: number[] = [];
    const res: number[] = [];

    nums.forEach((num, idx) => {
        if (num === 0) zeros.push(idx);
        else total *= num;
    });

    for (let i = 0; i < nums.length; i += 1) {
        if (zeros.length > 1) res[i] = 0;
        else if (zeros.length === 1 && i !== zeros[0]) res[i] = 0;
        else if (zeros.length === 1 && i === zeros[0]) res[i] = total;
        else res[i] = total / nums[i];
    }

    return res;
};
