/**
 * 383. Ransom Note
 * Algorithm: Hash Table
 * https://leetcode.com/problems/ransom-note/
 */

export const canConstruct = (ransomNote: string, magazine: string): boolean => {
    const hash: {[s: string]: number} = {};
    let res = true;

    [...magazine].some((char) => {
        if (!hash[char]) hash[char] = 0;
        hash[char] += 1;
    });

    [...ransomNote].some((char) => {
        if (!hash[char] || hash[char] === 0) {
            res = false;
            return true;
        }
        hash[char] -= 1;
    });

    return res;
};