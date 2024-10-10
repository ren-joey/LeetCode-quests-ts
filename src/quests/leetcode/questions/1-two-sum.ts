// 1-two-sum.ts

/**
 * 1. Two Sum
 * Algorithm: Hash Table
 * https://leetcode.com/problems/two-sum/description/
 */

export const twoSum = (nums: number[], target: number): number[] => {
    const hash: {[n: number]: number} = {};
    let res: number[] = [];

    nums.some((num, idx) => {
        const complement = target - num;
        if (hash[complement] !== undefined) {
            res = [hash[complement], idx];
            return true;
        } else {
            hash[num] = idx;
        }
    });

    return res;
};