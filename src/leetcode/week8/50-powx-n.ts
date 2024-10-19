/**
 * 50. Pow(x, n)
 * Algorithm: Binary Search
 * https://leetcode.com/problems/powx-n/
 *
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 *
 * Example 1:
 *      Input: x = 2.00000, n = 10
 *      Output: 1024.00000
 *
 * Example 2:
 *      Input: x = 2.10000, n = 3
 *      Output: 9.26100
 *
 * Example 3:
 *      Input: x = 2.00000, n = -2
 *      Output: 0.25000
 *      Explanation: 2-2 = 1/22 = 1/4 = 0.25
 *
 * Constraints:
 *      -100.0 < x < 100.0
 *      -231 <= n <= 231-1
 *      n is an integer.
 *      Either x is not zero or n > 0.
 *      -104 <= xn <= 104
 */

export const myPow = (x: number, n: number): number => {
    const calc_power = (x: number, n: number): number => {
        if (x === 0) return 0;
        if (n === 0) return 1;

        let res = calc_power(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 === 1) return res * x;
        return res;
    };

    const ans = calc_power(x, Math.abs(n));

    if (n >= 0) return ans;
    return 1 / ans;
};

export const myPow_brute_force = (x: number, n: number): number => {
    if (n === 0 || x === 1) return 1;
    else if (x === -1) return 1 * (n % 2 === 0 ? 1 : -1);

    const base = x;
    let res = 1;
    let count = 0;
    while (count < Math.abs(n)) {
        res *= base;
        count += 1;
    }

    return n > 0 ? res : 1 / res;
};