/**
 * 22. Generate Parentheses
 * Algorithm: Backtracking
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Example 1:
 *      Input: n = 3
 *      Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 *      Input: n = 1
 *      Output: ["()"]
 *
 * Constraints:
 *      1 <= n <= 8
 */

export const generateParenthesis = (n: number): string[] => {
    const res: string[] = [];

    const generator = (l_cnt: number, r_cnt: number, str: string) => {
        if (l_cnt === n && r_cnt === n) {
            res.push(str);
            return;
        }

        if (l_cnt < n) {
            generator(l_cnt + 1, r_cnt, str + '(');
        }

        if (r_cnt < l_cnt) {
            generator(l_cnt, r_cnt + 1, str + ')');
        }
    };

    generator(0, 0, '');

    return res;
};