/**
 * 125. Valid Palindrome
 * Algorithm: Two Pointers
 * https://leetcode.com/problems/valid-palindrome/
 */

export const isPalindrome = (s: string): boolean => {
    s = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
    if (s.length === 0) return true;

    let left_ptr = 0, right_ptr = s.length - 1;

    while (left_ptr <= right_ptr) {
        if (s[left_ptr] === s[right_ptr]) {
            left_ptr += 1;
            right_ptr -= 1;
        } else {
            return false;
        }
    }

    return true;
};