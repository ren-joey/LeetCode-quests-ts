/**
 * TODO:
 * 424. Longest Repeating Character Replacement
 * Algorithm: Sliding Window
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 *
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 *
 * Example 1:
 *      Input: s = "ABAB", k = 2
 *      Output: 4
 *      Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 * Example 2:
 *      Input: s = "AABABBA", k = 1
 *      Output: 4
 *      Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 *      The substring "BBBB" has the longest repeating letters, which is 4.
 *      There may exists other ways to achieve this answer too.
 *
 * Constraints:
 *      1 <= s.length <= 105
 *      s consists of only uppercase English letters.
 *      0 <= k <= s.length
 */

export const characterReplacement = (s: string, k: number): number => {
    // Initializing an empty array to store the count of the
    // characters in the given string s
    const arr: number[] = new Array(26).fill(0);
    let res = 0;
    let max = 0;

    // The left pointer for the sliding window is l AND r is the
    // right pointer
    let l = 0;
    for (let r = 0; r < s.length; r += 1) {
        // Counting the number of each character in the string s
        arr[s.charAt(r).charCodeAt(0) - 'A'.charCodeAt(0)] += 1;

        // Checking the character with max number of occurrence
        max = Math.max(max, arr[s.charAt(r).charCodeAt(0) - 'A'.charCodeAt(0)]);

        // Now we check if our current window is valid or not
        if (r - l + 1 - max > k) {
            // this means the no. of replacements is more than allowed (k)
            // Decrementing the count of the character which was
            // at l because it is no longer in the window
            arr[s.charAt(l).charCodeAt(0) - 'A'.charCodeAt(0)] -= 1;
            l += 1;
        }

        // The max our window can be
        res = Math.max(res, r - l + 1);
    }

    return res;
};
