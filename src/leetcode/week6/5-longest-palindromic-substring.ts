/**
 * TODO:
 * 5. Longest Palindromic Substring
 * Algorithm: Expand Around Center, Dynamic Programming, Manacher's Algorithm
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string s, return the longest
 * palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */


// Time complexity: O(n^3)
export const longestPalindrome = (s: string): string => {
    if (s.length <= 1) {
        return s;
    }

    let maxLen = 1;
    let maxStr = s[0];

    for (let i = 0; i < s.length - 1; i += 1) {
        for (let j = i + 1; j < s.length; j += 1) {
            if (j - i + 1 > maxLen
                && s.substring(i, j + 1) === s.substring(i, j + 1).split('').reverse().join('')
            ) {
                maxLen = j - i + 1;
                maxStr = s.substring(i, j + 1);
            }
        }
    }

    return maxStr;
};

// Time complexity: O(n^2), best performance in leetcode test cases
export const longestPalindrome_n2 = (s: string): string => {
    if (s.length <= 1) {
        return s;
    }

    const expandFromCenter = (left: number, right: number): string => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    };

    let maxStr = s[0];

    for (let i = 0; i < s.length - 1; i += 1) {
        const odd = expandFromCenter(i, i);
        const even = expandFromCenter(i, i + 1);

        if (odd.length > maxStr.length) {
            maxStr = odd;
        }
        if (even.length > maxStr.length) {
            maxStr = even;
        }
    }

    return maxStr;
};

// Time complexity: O(n^2)
export const longestPalindrome_dp = (s: string): string => {
    if (s.length <= 1) {
        return s;
    }

    let maxLen = 1;
    let maxStr = s[0];
    const dp: boolean[][] = Array.from({ length: s.length }, () => Array(s.length).fill(false));

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        for (let j = 0; j < i; j++) {
            if (s[j] === s[i]
                && (i - j <= 2 || dp[j + 1][i - 1])) {
                dp[j][i] = true;
                if (i - j + 1 > maxLen) {
                    maxLen = i - j + 1;
                    maxStr = s.substring(j, i + 1);
                }
            }
        }
    }

    return maxStr;
};

/**
 * Intuition :
 * To avoid the unnecessary validation of palindromes, we can use Manacher's algorithm. The algorithm is explained brilliantly in this article. The idea is to use palindrome property to avoid unnecessary validations. We maintain a center and right boundary of a palindrome. We use previously calculated values to determine if we can expand around the center or not. If we can expand, we expand and update the center and right boundary. Otherwise, we move to the next character and repeat the process. We also maintain a variable max_len to keep track of the maximum length of the palindrome. We also maintain a variable max_str to keep track of the maximum substring.
 *
 * Algorithm :
 * 1. We initialize a boolean table dp and mark all the values as false.
 * 2. We will use a variable max_len to keep track of the maximum length of the palindrome.
 * 3. We will iterate over the string and mark the diagonal elements as true as every single character is a palindrome.
 * 4. Now, we will iterate over the string and for every character we will expand around its center.
 * 5. For odd length palindrome, we will consider the current character as the center and expand around it.
 * 6. For even length palindrome, we will consider the current character and the next character as the center and expand around it.
 * 7. We will keep track of the maximum length and the maximum substring.
 * 8. Print the maximum substring.
 *
 * Complexity Analysis
 * Time complexity : O(n). Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n).
 * Space complexity : O(n). It uses O(n) space to store the table.
 */
export const longestPalindrome_manacher = (s: string): string => {
    if (s.length <= 1) {
        return s;
    }

    let maxLen = 1;
    let maxStr = s[0];
    s = '#' + s.split('').join('#') + '#';
    const dp = new Array(s.length).fill(0);
    let center = 0;
    let right = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < right) {
            dp[i] = Math.min(right - i, dp[2 * center - i]);
        }
        while (i - dp[i] - 1 >= 0 && i + dp[i] + 1 < s.length && s[i - dp[i] - 1] === s[i + dp[i] + 1]) {
            dp[i]++;
        }
        if (i + dp[i] > right) {
            center = i;
            right = i + dp[i];
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            maxStr = s.slice(i - dp[i], i + dp[i] + 1).replace(/#/g, '');
        }
    }

    return maxStr;
};