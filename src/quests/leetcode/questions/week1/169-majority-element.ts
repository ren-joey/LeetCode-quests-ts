/**
 * 169. Majority Element
 * Algorithm: Hash Table
 * https://leetcode.com/problems/majority-element/
 */

interface Hash { [n: number]: number }

export const majorityElement = (nums: number[]): number => {
    const hash: Hash = {};
    const threshold = Math.floor(nums.length / 2);
    let res: number = -1;

    nums.some((num) => {
        if (!hash[num]) hash[num] = 1;
        else hash[num] += 1;
        if (hash[num] > threshold) {
            res = num;
            return true;
        }
    });

    return res;
};