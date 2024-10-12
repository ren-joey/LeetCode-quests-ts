/**
 * TODO:
 * 338. Counting Bits
 * Algorithm: Bit Manipulation
 * https://leetcode.com/problems/counting-bits/
 */

export const countBits = (n: number): number[] => {
    const res: number[] = [];
    for (let i = 0; i <= n; i += 1) {
        let sum = 0;
        let num = i;

        while (num !== 0) {
            sum += num % 2;
            num = Math.floor(num / 2);
        }

        res.push(sum);
    }

    return res;
};