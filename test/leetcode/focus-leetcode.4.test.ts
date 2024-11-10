import { describe, expect, test } from "@jest/globals";

import {
    findMedianSortedArrays
} from '../../src/leetcode';

describe(`4. Median of Two Sorted Arrays`, () => {
    const cases: [number[], number[], number][] = [
        [[1, 3], [2], 2],
        [[1, 2], [3, 4], 2.5]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}, ${c[1]}
            Expected output: ${c[2]}
            `, () => {
            expect(findMedianSortedArrays(c[0], c[1])).toEqual(c[2]);
        });
    });
});