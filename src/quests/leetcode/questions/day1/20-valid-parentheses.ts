/**
 * 20. Valid Parentheses
 * Algorithm: Stack
 * https://leetcode.com/problems/valid-parentheses/
 */

export const isValid = (s: string): boolean => {
    const stack: string[] = [];
    let validation: boolean = true;

    [...s].some((char: string) => {
        if (['{','[','('].includes(char)) {
            stack.push(char);
        } else if (char === ')') {
            const check = stack.pop();
            if (check !== '(') {
                validation = false;
                return true;
            }
        } else if (char === ']') {
            const check = stack.pop();
            if (check !== '[') {
                validation = false;
                return true;
            }
        } else if (char === '}') {
            const check = stack.pop();
            if (check !== '{') {
                validation = false;
                return true;
            }
        }
    });

    if (stack.length !== 0) validation = false;

    return validation;
};