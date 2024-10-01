import { describe, expect, test } from "@jest/globals";
import { optimalSets } from '../../src/quests/delta-electronics';

describe(`套餐選擇問題`, () => {
    const cases = [
        [
            // products,
            11,
            // sets
            [
                [0, 1, 2, 4, 5],
                [0, 1, 12],
                [0, 1, 2, 3],
                [4, 7, 9, 11],
                [4, 5, 7, 8],
                [9, 11],
                [9, 10, 11]
            ],
            // expected
            [2, 4, 6]
        ]
    ];

    cases.forEach((c, idx) => {
        test(`Case ${idx+1}`, () => {
            const res = optimalSets(c[0] as number, c[1] as number[][]);
            expect(res).toEqual(c[2]);
        });
    });
});