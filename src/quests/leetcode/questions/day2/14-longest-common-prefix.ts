/**
 * 14. Longest Common Prefix
 * Algorithm: String
 * https://leetcode.com/problems/longest-common-prefix/
 */

export const longestCommonPrefix = (strs: string[]): string => {
    let res = '';
    let idx = 0;
    let stop = false;

    while (!stop) {
        const char = strs[0][idx];
        if (char === undefined) break;
        for (let i = 1; i < strs.length; i += 1) {
            if (
                strs[i][idx] === undefined
                || strs[i][idx] !== char
            ) stop = true;
        }
        if (!stop) {
            res += char;
            idx += 1;
        }
    }

    return res;
};