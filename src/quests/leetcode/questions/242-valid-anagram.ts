// 242-valid-anagram.ts

/**
 * 242. Valid Anagram
 * Algorithm: Hash Table
 * https://leetcode.com/problems/valid-anagram/
 */

export const isAnagram = (s: string, t: string): boolean => {
    const hash: {[s: string]: number} = {};
    let res = true;

    [...s].some((char) => {
        if (!hash[char]) hash[char] = 1;
        else hash[char] += 1;
    });
    [...t].some((char) => {
        if (!hash[char]) {
            res = false;
            return true;
        } else {
            hash[char] -= 1;
            if (hash[char] === 0) delete hash[char];
        }
    });
    if (res) res = /^0*$/g.test(Object.values(hash).toString());

    return res;
};