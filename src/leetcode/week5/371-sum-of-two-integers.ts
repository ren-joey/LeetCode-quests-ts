/**
 * TODO:
 * 371. Sum of Two Integers
 * Algorithm: Bit Manipulation
 * https://leetcode.com/problems/sum-of-two-integers/
 */

// const getNumber = (s: string): number => {
//     let res = 0;
//     for (let i = 0; i < s.length; i += 1) {
//         res = res * 2 + parseInt(s[i]);
//     }
//     return res;
// };

// const getBinary = (a: number): string => {
//     let res = '';
//     while(a > 0) {
//         res = `${a & 1}` + res;
//         a = Math.floor(a/2);
//     }
//     return res;
// };

// const binaryAdd = (a: any, b: any): string => {
//     a = a.split('').reverse();
//     b = b.split('').reverse();
//     let carry = 0;
//     let res = '';

//     for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
//         const sum = carry + parseInt(a[i] || '0') + parseInt(b[i] || '0');
//         if (sum === 3) {
//             res = '1' + res;
//             carry = 1;
//         } else if (sum === 2) {
//             res = '0' + res;
//             carry = 1;
//         } else if (sum === 1) {
//             res = '1' + res;
//             carry = 0;
//         } else if (sum === 0) {
//             res = '0' + res;
//         }
//     }
//     if (carry === 1) res = '1' + res;

//     return res;
// };

// function getSum(a: number, b: number): number {
//     return getNumber(binaryAdd(getBinary(a), getBinary(b)));
// };

export const getSum = (a: number, b: number): number => {
    while ((a & b) !== 0) {
        const o = a ^ b; // represents the sum without carry
        b = (a & b) << 1; // represents the carry
        a = o;
    }

    return a | b;
};