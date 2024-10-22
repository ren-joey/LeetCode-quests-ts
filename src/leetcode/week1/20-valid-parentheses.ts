/**
 * 20. Valid Parentheses
 * Algorithm: Stack
 * https://leetcode.com/problems/valid-parentheses/
 */

export const isValid = (s: string): boolean => {
    const stack: string[] = [];
    const matches: string[] = ['(', '[', '{'];
    let res = true;

    for (let i = 0; i < s.length; i += 1) {
        const c = s[i];
        if (matches.includes(c)) stack.push(c);
        else {
            const el = stack.pop();
            if (
                c === ')' && el !== '('
                || c === ']' && el !== '['
                || c === '}' && el !== '{'
            ) {
                res = false;
                break;
            }
        }
    }

    if (stack.length > 0) res = false;
    return res;
};