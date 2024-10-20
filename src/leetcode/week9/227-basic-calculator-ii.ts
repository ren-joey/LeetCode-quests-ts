/**
 * FIXME: need to know the solution for this problem
 * TODO:
 * 227. Basic Calculator II
 * Algorithm: Stack
 * https://leetcode.com/problems/basic-calculator-ii/
 *
 * Given a string s which represents an expression, evaluate this expression and return its value.
 * The integer division should truncate toward zero.
 * You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 *
 * Example 1:
 *      Input: s = "3+2*2"
 *      Output: 7
 *
 * Example 2:
 *      Input: s = " 3/2 "
 *      Output: 1
 *
 * Example 3:
 *      Input: s = " 3+5 / 2 "
 *      Output: 5
 *
 * Constraints:
 *      1 <= s.length <= 3 * 105
 *      s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
 *      s represents a valid expression.
 *      All the integers in the expression are non-negative integers in the range [0, 231 - 1].
 *      The answer is guaranteed to fit in a 32-bit integer.
 */

export const calculate = (s: string): number => {
    if (s == null || s.length === 0) return 0;
    const stack: number[] = [];
    let num = 0;
    let sign = '+';
    const len = s.length;

    for (let i = 0; i < len; i++) {
        const char = s.charAt(i);
        if (!isNaN(Number(char)) && char !== ' ') {
            num = num * 10 + Number(char);
        }
        if (isNaN(Number(char)) && char !== ' ' || i === len - 1) {
            if (sign === '-') {
                stack.push(-num);
            } else if (sign === '+') {
                stack.push(num);
            } else if (sign === '*') {
                stack.push(stack.pop()! * num);
            } else if (sign === '/') {
                stack.push(Math.trunc(stack.pop()! / num));
            }
            sign = char;
            num = 0;
        }
    }

    return stack.reduce((acc, curr) => acc + curr, 0);
};
