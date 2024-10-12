/**
 * 844. Backspace String Compare
 * Algorithm: String
 * https://leetcode.com/problems/backspace-string-compare/
 */

export const backspaceCompare = (s: string, t: string): boolean => {
    const s2 = [];
    const t2 = [];

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (char === '#') s2.pop();
        else s2.push(char);
    }

    for (let i = 0; i < t.length; i += 1) {
        const char = t[i];
        if (char === '#') t2.pop();
        else t2.push(char);
    }

    return s2.toString() === t2.toString();
};