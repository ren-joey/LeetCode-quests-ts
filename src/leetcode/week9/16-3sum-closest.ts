/**
 * TODO:
 * 16. 3Sum Closest
 * Algorithm: Two Pointers
 * https://leetcode.com/problems/3sum-closest/
 *
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 *
 * Example 1:
 *      Input: nums = [-1,2,1,-4], target = 1
 *      Output: 2
 *      Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * Example 2:
 *      Input: nums = [0,0,0], target = 1
 *      Output: 0
 *      Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 *
 * Constraints:
 *      3 <= nums.length <= 500
 *      -1000 <= nums[i] <= 1000
 *      -104 <= target <= 104
 */

export const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum with the sum of the first three elements

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum; // Update closest sum if the current sum is closer to the target
            }

            if (sum < target) {
                j += 1; // Increment j to increase the sum
            } else {
                k -= 1; // Decrement k to decrease the sum
            }
        }
    }

    return closestSum;
};