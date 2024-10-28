import { describe, expect, test } from "@jest/globals";

import {
    calculate_stack as calculate
} from '../../../src/leetcode';

describe(`224. Basic Calculator`, () => {
    const cases: [string, number][] = [
        ["1 + 1", 2],
        [" 2-1 + 2 ", 3],
        ["(1+(4+5+2)-3)+(6+8)", 23]
    ];

    cases.forEach((c, idx) => {
        test(`Case ${idx+1}`, () => {
            expect(calculate(c[0])).toEqual(c[1]);
        });
    });
});