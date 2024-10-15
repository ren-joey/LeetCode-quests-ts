/**
 * TODO:
 * 70. Climbing Stairs
 * Algorithm: Dynamic Programming, Fibonacci Sequence + Hash Table
 * https://leetcode.com/problems/climbing-stairs/
 */

// TLE solution
// function climbStairs(n: number): number {
//     if (n == 0 || n == 1) return 1;
//     else return climbStairs(n-1) + climbStairs(n-2);
// };

interface Hash {[n: number]: number}

const hash: Hash = {};

export const climbStairs = (n: number): number => {
    if (n == 0 || n == 1) return 1;
    if (!hash[n]) hash[n] = climbStairs(n-1) + climbStairs(n-2);
    return hash[n];
};