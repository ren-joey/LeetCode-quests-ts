/**
 * TODO:
 * 11. Container With Most Water
 * Algorithm: Two Pointers (Greedy)
 * https://leetcode.com/problems/container-with-most-water/
 */

export const maxArea = (height: number[]): number => {
    let l = 0;
    let r = height.length - 1;
    let max = 0;

    while (l < r) {
        max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
        if (height[l] > height[r]) r -= 1;
        else l += 1;
    }

    return max;
};