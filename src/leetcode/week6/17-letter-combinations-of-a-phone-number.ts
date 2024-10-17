/**
 * 17. Letter Combinations of a Phone Number
 * Algorithm: Backtracking
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 * Constraints:
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 */

export const letterCombinations = (digits: string): string[] => {
    if (!digits.length) {
        return [];
    }

    const digitToLetters: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const res: string[] = [];

    function backtrack(idx: number, comb: string): void {
        if (idx === digits.length) {
            res.push(comb);
            return;
        }

        for (const letter of digitToLetters[digits[idx]]) {
            backtrack(idx + 1, comb + letter);
        }
    }

    backtrack(0, "");

    return res;
};