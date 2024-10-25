/**
 * 42. Trapping Rain Water
 * Algorithm: Two Pointers
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Example 1:
 *      Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *      Output: 6
 *      Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 *
 * Example 2:
 *      Input: height = [4,2,0,3,2,5]
 *      Output: 9
 *
 * Constraints:
 *      n == height.length
 *      1 <= n <= 2 * 104
 *      0 <= height[i] <= 105
 */

export const trap = (height: number[]): number => {
    let l = 0, r = height.length - 1, res = 0;
    let lMax = height[l], rMax = height[r];

    while (l < r) {
        if (height[l] < height[r]) {
            l += 1;
            if (height[l] >= lMax) lMax = height[l];
            else res += lMax - height[l];
        } else {
            r -= 1;
            if (height[r] >= rMax) rMax = height[r];
            else res += rMax - height[r];
        }
    }

    return res;
};

export const trap_tle = (height: number[]): number => {
    const stack: number[] = [];
    const max = Math.max(...height);
    let res = 0;

    for (let i = max; i >= 0; i -= 1) {
        for (let j = 0; j < height.length; j += 1) {
            if (j === 0 && stack.length > 0) stack.pop();
            if (height[j] >= i) {
                if (stack.length === 0) stack.push(j);
                else {
                    res += j - stack.pop()! - 1;
                    stack.push(j);
                }
            }
        }
    }

    return res;
};