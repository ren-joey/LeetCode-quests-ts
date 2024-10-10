/**
 * TODO:
 * 409. Longest Palindrome
 * Algorithm: Hash Table
 * https://leetcode.com/problems/longest-palindrome/
 */

interface Hash {[n: string]: number}

export const longestPalindrome = (s: string): number => {
    const hash: Hash = {};

    [...s].some((char) => {
        if (!hash[char]) hash[char] = 1;
        else hash[char] += 1;
    });

    let max_length = 0;
    Object.values(hash).some((count) => {
        if (count % 2 === 1){
            if (max_length % 2 === 0) max_length += count;
            else max_length += count - 1;
        } else max_length += count;
    });

    return max_length;
};