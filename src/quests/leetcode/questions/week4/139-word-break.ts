/**
 * TODO:
 * 139. Word Break
 * Algorithm: Dynamic Programming
 * https://leetcode.com/problems/word-break/
 */

// function wordBreak(s: string, wordDict: string[]): boolean {
//     const findWords = (s: string) => {
//         if (s.length === 0) return true;
//         let res = false;
//         for (let i = 1; i <= s.length; i += 1) {
//             const sub = s.substr(0, i);
//             if (wordDict.includes(sub)) res = res || findWords(s.substr(i));
//         }
//         return res;
//     };

//     return findWords(s);
// };

export const wordBreak = (s: string, wordDict: string[]): boolean => {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < s.length; i += 1) {
        wordDict.some((word) => {
            const startAt = i - word.length + 1;
            // if (dp[startAt] && s.substr(startAt, word.length) === word) { // deprecated
            if (dp[startAt] && s.substring(startAt, startAt + word.length) === word) {
                dp[i+1] = true;
                return true;
            }
        });
    }

    return dp[dp.length - 1];
};