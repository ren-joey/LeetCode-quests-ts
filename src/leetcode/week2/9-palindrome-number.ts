/**
 * 9. Palindrome Number
 * Algorithm: String
 * https://leetcode.com/problems/palindrome-number/
 */

export const isPalindrome = (x: number): boolean => {
    if (x < 0) return false;

    let check = true;
    const s = x.toString();
    let l = 0;
    let r = s.length - 1;

    while (l < r && check === true) {
        if (s[l] !== s[r]) check = false;
        else {
            l += 1;
            r -= 1;
        }
    }

    return check;
};