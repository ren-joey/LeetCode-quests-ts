/**
 * 7. Reverse Integer
 * Algorithm: Math
 * https://leetcode.com/problems/reverse-integer/
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example 1:
 *      Input: x = 123
 *      Output: 321
 *
 * Example 2:
 *      Input: x = -123
 *      Output: -321
 *
 * Example 3:
 *      Input: x = 120
 *      Output: 21
 *
 * Constraints:
 *      -231 <= x <= 231 - 1
 */

export const reverse = (x: number): number => {
    let res = 0;
    if (x < 0) {
        res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        res = parseInt(String(x).split('').reverse().join(''));
    }

    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
        return 0;
    }

    return res;
};