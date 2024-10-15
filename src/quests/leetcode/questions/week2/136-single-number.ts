/**
 * 136. Single Number
 * Algorithm: Hash Table
 * https://leetcode.com/problems/single-number/
 */

interface Hash { [n: number]: number }

export const singleNumber = (nums: number[]): number => {
    const hash: Hash = {};

    nums.some((num) => {
        if (!hash[num]) hash[num] = 1;
        else delete hash[num];
    });

    return parseInt(Object.keys(hash)[0]);
};