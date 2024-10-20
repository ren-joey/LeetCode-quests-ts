/**
 * 179. Largest Number
 * Algorithm: Sorting
 * https://leetcode.com/problems/largest-number/
 *
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 * Since the result may be very large, so you need to return a string instead of an integer.
 *
 * Example 1:
 *      Input: nums = [10,2]
 *      Output: "210"
 *
 * Example 2:
 *      Input: nums = [3,30,34,5,9]
 *      Output: "9534330"
 *
 * Constraints:
 *      1 <= nums.length <= 100
 *      0 <= nums[i] <= 109
 */

export const largestNumber = (nums: number[]): string => {
    // Convert integers to strings
    const array = nums.map(String);

    // Custom sorting with a comparator function
    array.sort((a, b) => (b + a).localeCompare(a + b));

    // Handle the case where the largest number is "0"
    if (array[0] === "0") {
        return "0";
    }

    // Build the largest number from the sorted array
    return array.join('');
};