import { describe, expect, test } from "@jest/globals";
import { optimalSets } from '../src/delta-electronics';
import { maxSubArray as solution1 } from '../src/delta-electronics/interview/solution1';
import { maxSubArray as solution2 } from '../src/delta-electronics/interview/solution2';
import { maxSubArray as solution3 } from '../src/delta-electronics/interview/solution3';

describe(`面試問題：最大子陣列`, () => {
    const cases = [
        [
            [-2, 1, -3, 4, -1, 2, 1, -5, 4], [4, -1, 2, 1]
        ],
        [
            [-2, 7, -3, 4, -1, 2, 1, -5, 4], [7, -3, 4, -1, 2, 1]
        ],
        [
            [-2, -1, -3, -4, -1, 0, -1, -5, -4], [0]
        ],
        [
            [-2, -1, -3, -4, -1, -2, -1, -5, -4], [-1]
        ],
        [
            [7, -1, -3, -4, -1, 2, 1, -5, 4], [7]
        ]
    ];

    cases.forEach((c, idx) => {
        test(`
            <Solution 1: 4 Arrays>
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = solution1(c[0]);
            expect(res).toEqual(c[1]);
        });

        test(`
            <Solution 2: 1 Array>
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = solution2(c[0]);
            expect(res).toEqual(c[1]);
        });

        test(`
            <Solution 3: No Array>
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = solution3(c[0]);
            expect(res).toEqual(c[1]);
        });
    });
});

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
        ],
        [
            // products,
            11,
            // sets
            [
                [0],
                [1],
                [2],
                [3],
                [4],
                [5],
                [1, 5, 7, ],
                [6, 7, 8],
                [6],
                [8]
            ],
            // expected
            [0, 1, 2, 3, 4, 5, 7]
        ],
        [
            // products,
            100,
            // sets
            [
                [0],
                [1],
                [2],
                [3],
                [4],
                [5],
                [6],
                [8],
                [9],
                [1, 5, 7],
                [6, 7, 8],
                [10],
                [11],
                [12],
                [13],
                [14],
                [15],
                [16],
                [18],
                [6, 7, 8, 9],
                [6, 7, 8, 9, 10],
                [6, 7, 8, 9, 11],
                [6, 7, 8, 9, 12],
                [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 11, 30, 31, 36, 32, 37],
                [6, 7, 8, 19],
                [6, 7, 8, 19, 20],
                [6, 7, 8, 19, 21],
                [6, 7, 8, 19, 22],
                [6, 7, 8, 29],
                [6, 7, 8, 29, 30],
                [6, 7, 8, 29, 31],
                [6, 7, 8, 29, 32],
                [29, 30],
                [29, 35],
                [29, 31],
                [29, 36],
                [29, 32],
                [29, 37],
            ],
            // expected
            [13, 14, 15, 16, 17, 18, 23, 33]
        ]
    ];

    cases.forEach((c, idx) => {
        test(`Case ${idx+1}
            products: ${c[0]}
            sets: ${JSON.stringify(c[1])}
            expected: ${c[2]}
            `, () => {
            const res = optimalSets(c[0] as number, c[1] as number[][]);
            expect(res).toEqual(c[2]);
        });
    });
});
