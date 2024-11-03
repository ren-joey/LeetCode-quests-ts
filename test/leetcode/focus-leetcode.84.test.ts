import { describe, expect, test } from "@jest/globals";

import {
    largestRectangleArea
} from '../../src/leetcode';

describe(`84. Largest Rectangle in Histogram`, () => {
    const cases: [number[], number][] = [
        [[2, 3, 5, 6, 2, 3], 12],
        // [[2, 1, 5, 6, 2, 3], 10],
        // [[2, 4], 4]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected output: ${c[1]}
            `, () => {
            expect(largestRectangleArea(c[0])).toEqual(c[1]);
        });
    });
});