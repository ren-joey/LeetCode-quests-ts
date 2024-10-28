import { describe, expect, test } from "@jest/globals";

import {
    jobScheduling
} from '../../src/leetcode';

describe(`1235. Maximum Profit in Job Scheduling`, () => {
    const cases: [number[], number[], number[], number][] = [
        [[1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70], 120],
        [[1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60], 150],
        [[1, 1, 1], [2, 3, 4], [5, 6, 4], 6]
    ];

    cases.forEach((c, idx) => {
        test(`Case ${idx+1}`, () => {
            expect(jobScheduling(c[0], c[1], c[2])).toEqual(c[3]);
        });
    });
});