/**
 * TODO:
 * 560. Subarray Sum Equals K
 * Algorithm: Hash Table
 * https://leetcode.com/problems/subarray-sum-equals-k/
 *
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example 1:
 *      Input: nums = [1,1,1], k = 2
 *      Output: 2
 *
 * Example 2:
 *      Input: nums = [1,2,3], k = 3
 *      Output: 2
 *
 * Constraints:
 *      1 <= nums.length <= 2 * 104
 *      -1000 <= nums[i] <= 1000
 *      -107 <= k <= 107
 *
 * References:
 *      https://leetcode.com/problems/subarray-sum-equals-k/solutions/1759909/c-full-explained-every-step-w-dry-run-o-n-2-o-n-two-approaches/
 */

export const subarraySum = (nums: number[], k: number): number => {
    const n = nums.length; // take the size of the array

    const prefix: number[] = new Array(n); // make a prefix array to store prefix sum

    prefix[0] = nums[0]; // for element at index at zero, it is same

    // making our prefix array
    for (let i = 1; i < n; i++) {
        prefix[i] = nums[i] + prefix[i - 1];
    }

    const mp: {[n: number]: number} = {}; // declare a map

    let ans = 0; // to store the number of our subarrays having sum as 'k'

    for (let i = 0; i < n; i += 1) { // traverse from the prefix array
        if (prefix[i] === k) { // if it already becomes equal to k, then increment ans
            ans += 1;
        }

        // now, as we discussed find whether (prefix[i] - k) present in map or not
        if (mp[prefix[i] - k]) {
            ans += mp[prefix[i] - k]!; // if yes, then add it to our answer
        }

        mp[prefix[i]] = (mp[prefix[i]] || 0) + 1; // put prefix sum into our map
    }

    return ans; // and at last, return our answer
};

export const subarraySum_brute_force = (nums: number[], k: number): number => {
    const n = nums.length; // taking the size of the array

    let ans = 0; // ans variable to store our count

    for (let i = 0; i < n; i++) { // traverse from the array
        let sum = nums[i]; // provide sum with nums[i]

        if (sum === k) { // if element itself equal to k, then also increment count
            ans += 1;
        }

        for (let j = i + 1; j < n; j++) { // now moving forward,
            sum += nums[j]; // add elements with sum

            if (sum === k) { // if at any point they become equal to k
                ans += 1; // increment answer
            }
        }
    }

    return ans; // and at last, return answer
};