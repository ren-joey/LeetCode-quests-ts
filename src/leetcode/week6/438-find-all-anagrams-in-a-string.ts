/**
 * 438. Find All Anagrams in a String
 * Algorithm: Sliding Window
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * Example 2:
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 * Constraints:
 * 1 <= s.length, p.length <= 3 * 104
 * s and p consist of lowercase English letters.
 */

export const findAnagrams = (s: string, p: string): number[] => {
    const result: number[] = [];
    if (p.length > s.length) return result;

    const map: { [key: string]: number } = {};
    for (const char of p) {
        map[char] = (map[char] || 0) + 1;
    }

    let counter = Object.keys(map).length;
    let begin = 0, end = 0;

    while (end < s.length) {
        const endChar = s[end];
        if (map[endChar] !== undefined) {
            map[endChar] -= 1;
            // counter is 0 means all characters in p are matched
            if (map[endChar] === 0) counter -= 1;
        }
        end++;

        while (counter === 0) {
            // if counter is 0 and the length of the window is equal to the length of p
            // then we found an anagram
            if (end - begin === p.length) {
                result.push(begin);
            }

            const beginChar = s[begin];
            if (map[beginChar] !== undefined) {
                map[beginChar] += 1;
                if (map[beginChar] > 0) counter += 1;
            }
            begin++;
        }
    }
    return result;
};
