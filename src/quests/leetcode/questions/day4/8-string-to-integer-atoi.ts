/**
 * 8. String to Integer (atoi)
 * Algorithm: String
 * https://leetcode.com/problems/string-to-integer-atoi/
 */

export const myAtoi = (s: string): number => {
    let res = '';
    let idx = 0;
    const digit = /^[0-9]$/;
    let sign: number | undefined = undefined;

    while (s[idx] === ' ') {
        idx += 1;
    }

    while (idx < s.length) {
        const c = s[idx];
        if (c === '-') {
            if (sign === undefined) sign = -1;
            else break;
        }
        else if (c === '+') {
            if (sign === undefined) sign = 1;
            else break;
        }
        else if (digit.test(c)) {
            if (sign === undefined) sign = 1;
            res += c;
        }
        else break;
        idx += 1;
    }

    if (sign === undefined) sign = 1;

    if (sign === 1 && +res > 2147483647) res = '2147483647';
    else if (sign === -1 && +res > 2147483648) res = '2147483648';

    return +res * sign;
};