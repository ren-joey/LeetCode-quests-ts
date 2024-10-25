/**
 *
 * 271. Encode and Decode Strings
 * Algorithm: String
 * https://leetcode.com/problems/encode-and-decode-strings/
 *
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
 * Machine 1 (sender) has the function:
 * string encode(vector<string> strs) {
 *   // ... your code
 *   return encoded_string;
 * }
 * Machine 2 (receiver) has the function:
 * vector<string> decode(string s) {
 *   //... your code
 *   return strs;
 * }
 *
 * So Machine 1 does:
 * string encoded_string = encode(strs);
 *
 * and Machine 2 does:
 * vector<string> strs2 = decode(encoded_string);
 *
 * strs2 in Machine 2 should be the same as strs in Machine 1.
 * Implement the encode and decode methods.
 *
 * Note:
 *      The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
 *      Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
 *      Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.
 *
 * References:
 *      https://www.cnblogs.com/grandyang/p/5265628.html
 */

export class Codec {
    // Encodes a list of strings to a single string.
    encode(strs: string[]): string {
        let res = "";
        for (const str of strs) {
            res += `${str.length}/${str}`;
        }
        return res;
    }

    // Decodes a single string to a list of strings.
    decode(s: string): string[] {
        const res: string[] = [];
        let i = 0;
        while (i < s.length) {
            const slashIndex = s.indexOf("/", i);
            const len = parseInt(s.substring(i, slashIndex), 10);
            res.push(s.substring(slashIndex + 1, slashIndex + 1 + len));
            i = slashIndex + 1 + len;
        }
        return res;
    }
}
