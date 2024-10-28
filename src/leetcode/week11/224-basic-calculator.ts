/**
 * TODO:
 * FIXME: need to understand the stack solution
 * 224. Basic Calculator
 * Algorithm: Stack
 * https://leetcode.com/problems/basic-calculator/
 *
 * Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 *
 * Example 1:
 *      Input: s = "1 + 1"
 *      Output: 2
 *
 * Example 2:
 *      Input: s = " 2-1 + 2 "
 *      Output: 3
 *
 * Example 3:
 *      Input: s = "(1+(4+5+2)-3)+(6+8)"
 *      Output: 23
 *
 * Constraints:
 *      1 <= s.length <= 3 * 105
 *      s consists of digits, '+', '-', '(', ')', and ' '.
 *      s represents a valid expression.
 *      '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
 *      '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
 *      There will be no two consecutive operators in the input.
 *      Every number and running calculation will fit in a signed 32-bit integer.
 */

const simplify = (s: string): string => {
    let ans = '';
    const st: string[] = [];
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c !== '(' && c !== ')') {
            if ((c !== '+' && c !== '-') || st.length === 0) {
                ans += c;
            } else {
                const sign = st.pop()!;
                if ((sign === '+' && c === '+') || (sign === '-' && c === '-')) {
                    ans += '+';
                } else if ((sign === '+' && c === '-') || (sign === '-' && c === '+')) {
                    ans += '-';
                }
                st.push(sign);
            }
        } else {
            if (c === '(') {
                let sign = '+';
                if (i > 0) {
                    if (s[i - 1] === '-') sign = '-';
                    else if (s[i - 1] === '+') sign = '+';
                }
                if (st.length > 0 && st[st.length - 1] === '-') {
                    sign = (sign === '-') ? '+' : '-';
                }
                st.push(sign);
            } else {
                st.pop();
            }
        }
    }
    return ans;
};

const removeSpaces = (s: string): string => {
    let ans = '';
    for (const c of s) {
        if (c !== ' ') {
            ans += c;
        }
    }
    return ans;
};

export const calculate = (s: string): number => {
    const str = simplify(removeSpaces(s));
    let ans = 0, temp = 0;
    let sign = '+';
    if (str[0] === '-') sign = '-';
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c >= '0' && c <= '9') {
            temp = temp * 10 + (c.charCodeAt(0) - '0'.charCodeAt(0));
        } else {
            if (sign === '-') {
                temp *= -1;
            }
            ans += temp;
            temp = 0;
            if (c === '-') sign = '-';
            if (c === '+') sign = '+';
        }
    }
    if (sign === '-') {
        temp *= -1;
    }
    ans += temp;
    return ans;
};

export const calculate_stack = (s: string): number => {
    const stack: number[] = [];
    let result = 0;
    let number = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (/\d/.test(c)) {
            number = 10 * number + parseInt(c);
        } else if (c === '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } else if (c === '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } else if (c === '(') {
            // we push the result first, then sign;
            stack.push(result);
            stack.push(sign);
            // reset the sign and result for the value in the parenthesis
            sign = 1;
            result = 0;
        } else if (c === ')') {
            result += sign * number;
            number = 0;
            result *= stack.pop()!; // stack.pop() is the sign before the parenthesis
            result += stack.pop()!; // stack.pop() now is the result calculated before the parenthesis
        }
    }

    if (number !== 0) result += sign * number;
    return result;
};