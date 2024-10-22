/**
 * 844. Backspace String Compare
 * Algorithm: String
 * https://leetcode.com/problems/backspace-string-compare/
 *
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Example 1:
 *      Input: s = "ab#c", t = "ad#c"
 *      Output: true
 *      Explanation: Both s and t become "ac".
 *
 * Example 2:
 *      Input: s = "ab##", t = "c#d#"
 *      Output: true
 *      Explanation: Both s and t become "".
 *
 * Example 3:
 *      Input: s = "a#c", t = "b"
 *      Output: false
 *      Explanation: s becomes "c" while t becomes "b".
 *
 * Constraints:
 *      1 <= s.length, t.length <= 200
 *      s and t only contain lowercase letters and '#' characters.
 *
 * Follow up:
 *      Can you solve it in O(n) time and O(1) space?
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