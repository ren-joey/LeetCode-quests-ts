/**
 * TODO:
 * 394. Decode String
 * Algorithm: Stack
 * https://leetcode.com/problems/decode-string/
 *
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
 * The test cases are generated so that the length of the output will never exceed 105.
 *
 * Example 1:
 *      Input: s = "3[a]2[bc]"
 *      Output: "aaabcbc"
 *
 * Example 2:
 *      Input: s = "3[a2[c]]"
 *      Output: "accaccacc"
 *
 * Example 3:
 *      Input: s = "2[abc]3[cd]ef"
 *      Output: "abcabccdcdcdef"
 *
 * Constraints:
 *      1 <= s.length <= 30
 *      s consists of lowercase English letters, digits, and square brackets '[]'.
 *      s is guaranteed to be a valid input.
 *      All the integers in s are in the range [1, 300].
 */

export const decodeString = (s: string): string => {
    const stack: (string | number)[] = [];
    let curNum = 0;
    let curString = '';

    for (const c of s) {
        if (c === '[') {
            stack.push(curString);
            stack.push(curNum);
            curString = '';
            curNum = 0;
        } else if (c === ']') {
            const num = stack.pop() as number;
            const prevString = stack.pop() as string;
            curString = prevString + curString.repeat(num);
        }
        // If the character is a number, calculate the number
        else if (!isNaN(Number(c))) {
            curNum = curNum * 10 + Number(c); // Multiply the current number by 10 and add the new number
        } else {
            curString += c;
        }
    }

    return curString;
};
