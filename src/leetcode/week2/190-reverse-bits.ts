/**
 * TODO:
 * 190. Reverse Bits
 * Algorithm: Bit Manipulation
 * https://leetcode.com/problems/reverse-bits/
 */

export const reverseBits = (n: number): number => {
    let binaries: number[] = [];
    while (n !== 0) {
        binaries.push(n % 2);
        n = Math.floor(n / 2);
    }
    for (let i = binaries.length + 1; i <= 32; i++) {
        binaries.push(0);
    }
    let res = 0;
    binaries = binaries.reverse();
    while (binaries.length > 0) {
        const num = binaries.pop() as number;
        res = (res * 2) + num;
    }
    return res;
};

export const reverseBits_bitwise = (n: number): number => {
    let res = '';
    for(let i = 0; i < 32; i++) {
        res += (n >> i & 1).toString();
    }
    return parseInt(res, 2);
};