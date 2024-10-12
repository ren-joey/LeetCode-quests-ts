/**
 * 13. Roman to Integer
 * Algorithm: String
 * https://leetcode.com/problems/roman-to-integer/
 */

type RomanChar = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

type RomanMap = {
    [key in RomanChar]: number;
}

export const romanToInt = (s: RomanChar): number => {
    const map: RomanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let res = 0;
    for (let i = 0; i < s.length; i += 1) {
        const char1 = s[i] as RomanChar;
        const num1 = map[char1] || 0;
        if (char1 === 'I' || char1 === 'X' || char1 === 'C') {
            const char2 = s[i+1] as RomanChar;
            const num2 = map[char2] || 0;
            if (num2 > num1) {
                res += (num2 - num1);
                i += 1;
            } else res += num1;
        }
        else res += num1;
    }

    return res;
};