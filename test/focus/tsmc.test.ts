import { describe, expect, test } from "@jest/globals";
import { closedPaths } from '../../src/tsmc/1-closed-paths';
import { minimumTime } from '../../src/tsmc/2-minimum-time';
import { getMinimumOperations } from '../../src/tsmc/3-get-minimum-operations';

describe(`Quest: 1-closed-paths.ts`, () => {
    const cases = [
        [649578, 5],
        [1000000000, 9],
        [1000000001, 8],
        [0, 1],
        [888888888, 18],
        [111111111, 0],
        [666666666, 9],
        [999999999, 9],
        [123456789, 5],
        [987654321, 5],
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = closedPaths(c[0]);
            expect(res).toEqual(c[1]);
        });
    });
});

describe(`Quest: 2-minimum-time.ts`, () => {
    const cases: [number[], number, number][] = [
        [[4, 3, 1], 8, 3],
        [[3, 3, 4, 2, 1], 15, 6]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = minimumTime(c[0], c[1]);
            expect(res).toEqual(c[2]);
        });
    });
});

describe(`Quest: 3-get-minimum-operations.ts`, () => {
    // FIXME: This test case may not be correct
    const cases: [number, number[], number[], number[], number[], number][] = [
        [4, [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1], [1, 2, 3], 2],
        [4, [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1], [1, 2, 3], 2],
        [5, [1, 1, 0, 1, 0], [0, 1, 1, 0, 1], [0, 0, 1, 2], [1, 2, 3, 4], 3],
        [5, [1, 1, 0, 1, 0], [0, 1, 1, 0, 1], [0, 0, 1, 2], [1, 2, 3, 4], 3],
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]}, ${c[4]}
            Expected: ${c[5]}
            `, () => {
            const res = getMinimumOperations(c[0], c[1], c[2], c[3], c[4]);
            expect(res).toEqual(c[5]);
        });
    });
});
