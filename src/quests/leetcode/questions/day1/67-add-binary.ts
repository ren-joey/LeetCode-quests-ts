/**
 * 67. Add Binary
 * Algorithm: Binary Math
 * https://leetcode.com/problems/add-binary/
 */

export const addBinary = (a: string, b: string): string => {
    const a_arr = [...a].reverse();
    const b_arr = [...b].reverse();
    const max = Math.max(a_arr.length, b_arr.length);
    let res = '';
    let carry = 0;

    for (let i = 0; i < max; i += 1) {
        const x = parseInt(a_arr[i] || '0');
        const y = parseInt(b_arr[i] || '0');
        const sum = x + y + carry;
        if (sum === 0) {
            carry = 0;
            res = '0' + res;
        } else if (sum === 1) {
            carry = 0;
            res = '1' + res;
        } else if (sum === 2) {
            carry = 1;
            res = '0' + res;
        } else if (sum === 3) {
            carry = 1;
            res = '1' + res;
        }
    }
    return carry ? '1' + res : res;
};