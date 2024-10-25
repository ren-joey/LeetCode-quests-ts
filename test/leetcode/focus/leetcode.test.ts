import { describe, expect, test } from "@jest/globals";

import {
    minKnightMoves
} from '../../../src/leetcode';

describe(`LeetCode 1197-minimum-knight-moves.ts`, () => {
    const cases: any[] = [
        [2, 1, 1],
        [5, 5, 4],
        [0, 0, 0],
        [1, 1, 2],
        [1, 0, 3],
        [0, 1, 3]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            expect(minKnightMoves(c[0], c[1])).toEqual(c[2]);
        });
    });
});