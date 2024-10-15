/**
 * TODO:
 * 3. Longest Substring Without Repeating Characters
 * Algorithm: Sliding Window
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

export const lengthOfLongestSubstring = (s: string): number => {
    if (s.length <= 1) return s.length;

    let max = 1;
    let l = 0;
    let r = 1;

    while (r < s.length) {
        const dup = s.indexOf(s[r], l);
        if (dup >= r) {
            r += 1;
            max = Math.max(max, r-l);
        }
        else if (dup < r) {
            l = dup + 1;
            r += 1;
        }
    }

    return max;
};