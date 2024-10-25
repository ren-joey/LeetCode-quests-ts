/**
 * TODO:
 * 76. Minimum Window Substring
 * Algorithm: Sliding Window
 * https://leetcode.com/problems/minimum-window-substring/
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 *
 * Example 1:
 *      Input: s = "ADOBECODEBANC", t = "ABC"
 *      Output: "BANC"
 *      Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 *
 * Example 2:
 *      Input: s = "a", t = "a"
 *      Output: "a"
 *      Explanation: The entire string s is the minimum window.
 *
 * Example 3:
 *      Input: s = "a", t = "aa"
 *      Output: ""
 *      Explanation: Both 'a's from t must be included in the window.
 *      Since the largest window of s only has one 'a', return empty string.
 *
 * Constraints:
 *      m == s.length
 *      n == t.length
 *      1 <= m, n <= 105
 *      s and t consist of uppercase and lowercase English letters.
 *
 * Follow up:
 *      Could you find an algorithm that runs in O(m + n) time?
 */

export const minWindow = (s: string, t: string): string => {
    const map: number[] = new Array(128).fill(0);
    for (const c of t) map[c.charCodeAt(0)] += 1;
    let counter = t.length;
    let begin = 0, end = 0;
    let minLen = Infinity;
    let head = 0;

    while (end < s.length) {
        if (map[s.charCodeAt(end)] > 0) counter -= 1; // in t
        map[s.charCodeAt(end)] -= 1;
        end += 1;
        while (counter === 0) { // valid
            if (end - begin < minLen) {
                minLen = end - begin;
                head = begin;
            }
            if (map[s.charCodeAt(begin)] === 0) counter += 1; // make it invalid
            map[s.charCodeAt(begin)] += 1;
            begin += 1;
        }
    }
    return minLen === Infinity ? "" : s.substring(head, head + minLen);
};
