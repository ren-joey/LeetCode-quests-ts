/**
 * 242. Valid Anagram
 * Algorithm: Hash Table
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
 *
 * Example 1:
 *      Input: s = "anagram", t = "nagaram"
 *      Output: true
 *
 * Example 2:
 *      Input: s = "rat", t = "car"
 *      Output: false
 *
 * Constraints:
 *      1 <= s.length, t.length <= 5 * 104
 *      s and t consist of lowercase English letters.
 *
 * Follow up:
 *      What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
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
    if (res) res = /^0*$/g.test(Object.values(hash).toString()); // Check if all values are 0

    return res;
};