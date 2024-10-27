import { describe, expect, test } from "@jest/globals";

import {
    MedianFinder
} from '../../src/leetcode';

describe(`295. Find Median from Data Stream`, () => {
    const cases: [number[][], (null | number)[]][] = [
        [
            [
                [1],
                [2],
                [],
                [3],
                []
            ],
            [null, null, 1.5, null, 2.0]
        ]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const mf = new MedianFinder();
            c[0].forEach((op, idx) => {
                if (op.length === 0) {
                    expect(mf.findMedian()).toEqual(c[1][idx]);
                } else {
                    mf.addNum(op[0]);
                }
            });
        });
    });
});