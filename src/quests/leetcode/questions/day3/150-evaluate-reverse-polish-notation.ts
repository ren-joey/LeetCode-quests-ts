/**
 * TODO:
 * 150. Evaluate Reverse Polish Notation
 * Algorithm: Stack
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

export const evalRPN = (tokens: string[]): number => {
    const stack: number[] = [];

    while (tokens.length > 0) {
        const token = tokens.shift();

        if (token === '+') {
            const num1 = stack.pop() as number;
            const num2 = stack.pop() as number;
            stack.push(num2 + num1);
        }
        else if (token === '-') {
            const num1 = stack.pop() as number;
            const num2 = stack.pop() as number;
            stack.push(num2 - num1);
        }
        else if (token === '*') {
            const num1 = stack.pop() as number;
            const num2 = stack.pop() as number;
            stack.push(num2 * num1);
        }
        else if (token === '/') {
            const num1 = stack.pop() as number;
            const num2 = stack.pop() as number;
            stack.push(Math.trunc(num2 / num1));
        }
        else stack.push(parseInt(token as string));
    }

    return stack.pop() as number;
};