/**
 * TODO:
 * 416. Partition Equal Subset Sum
 * Algorithm: Set
 * https://leetcode.com/problems/partition-equal-subset-sum/
 */

export const canPartition = (nums: number[]): boolean => {
    const max = nums.reduce((a, b) => a + b, 0);
    if (max % 2) return false;
    const target = max / 2;
    const memo = new Set([0]);

    for (const num of nums) {
        const arr_memo = Array.from(memo);
        for (const x of arr_memo) {
            memo.add(x + num);
        }
    }

    return memo.has(target);
};