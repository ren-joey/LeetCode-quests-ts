/**
 * 217. Contains Duplicate
 * Algorithm: Hash Table
 * https://leetcode.com/problems/contains-duplicate/
 */

interface Hash {[n: number]: number}

export const containsDuplicate = (nums: number[]): boolean => {
    const hash: Hash = {};
    let detected = false;
    nums.some((num) => {
        if (!hash[num]) hash[num] = 1;
        else {
            detected = true;
            return true;
        }
    });
    return detected;
};