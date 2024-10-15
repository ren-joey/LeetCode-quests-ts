/**
 * 152. Maximum Product Subarray
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/maximum-product-subarray/
 */

export const maxProduct = (nums: number[]): number => {
    const q1: number[][] = new Array(nums.length).fill([]);
    const q2: number[] = new Array(nums.length);
    q1[0] = [nums[0], nums[0]];
    q2[0] = nums[0];

    for (let i = 1; i < nums.length; i += 1) {
        q1[i] = [
            Math.max(
                nums[i],
                q1[i-1][0] * nums[i],
                q1[i-1][1] * nums[i]
            ),
            Math.min(
                nums[i],
                q1[i-1][0] * nums[i],
                q1[i-1][1] * nums[i]
            )
        ];
        q2[i] = Math.max(q1[i][0], q2[i-1]);
    }

    return q2[q2.length - 1];
};