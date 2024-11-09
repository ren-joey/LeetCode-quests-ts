import { describe, expect, test } from "@jest/globals";

import {
    FreqStack
} from '../../src/leetcode';

describe(`895. Maximum Frequency Stack`, () => {
    const cases: [string, number, null|number][][] = [
        [
            ["push", 5, null],
            ["push", 7, null],
            ["push", 5, null],
            ["push", 7, null],
            ["push", 4, null],
            ["push", 5, null],
            ["pop", 0, 5],
            ["pop", 0, 7],
            ["pop", 0, 5],
            ["pop", 0, 4]
        ]
    ];

    const freqStack = new FreqStack();

    cases.forEach((c, idx) => {
        const inputs: [string, number][] = c.map((i) => [i[0], i[1]]);
        const expects = c.map((i) => i[2]).filter((i) => i !== null);
        const res: (null|number)[] = [];
        test(`
            Case ${idx+1}
            Input: ${inputs.toString()}
            Expected output: ${expects.toString()}
            `, () => {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i][0] === "push") {
                    freqStack.push(inputs[i][1]);
                } else if (inputs[i][0] === "pop") {
                    res.push(freqStack.pop());
                }
            }
            expect(res).toEqual(expects);
        });
    });
});