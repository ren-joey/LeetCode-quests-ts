/**
 * 191. Number of 1 Bits
 * Algorithm: Bit Manipulation
 * https://leetcode.com/problems/number-of-1-bits/
 */

export const hammingWeight = (n: number): number => {
    let sum = 0;
    while (n !== 0) {
        sum += n % 2;
        n = Math.floor(n / 2);
    }

    return sum;
};

export const hammingWeight_bitwise = (n: number): number => {
    let res = 0;
    for (let i = 0; i < 32; i += 1) {
        if (n >> i & 1) res += 1;
    }
    return res;
};

export const hammingWeight_bitwise_iteration = (n: number): number => {
    let res = 0;
    while(n !== 0) {
        res += n & 1;
        n >>= 1;
    }
    return res;
};