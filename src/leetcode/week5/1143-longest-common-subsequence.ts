/**
 * TODO:
 * 1143. Longest Common Subsequence
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters.
 * (eg, "ace" is a subsequence of "abcde" while "aec" is not).
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 * Example 1:
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 * Example 2:
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 * Example 3:
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 *
 * Constraints:
 * 1 <= text1.length, text2.length <= 1000
 * text1 and text2 consist of only lowercase English characters.
 */

export const longestCommonSubsequence = (text1: string, text2: string): number => {
    const dp = new Array(text1.length).fill(0);

    for (const c of text2) {
        let len = 0;
        for (let i = 0; i < dp.length; i+= 1) {
            if (len < dp[i]) len = dp[i];
            else if (c === text1[i]) {
                dp[i] = Math.max(dp[i], len + 1);
            }
        }
    }

    return Math.max(...dp);
};
