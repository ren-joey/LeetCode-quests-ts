import { describe, expect, test } from "@jest/globals";
import { q1 } from '../../src/tsmc/q1';
import { q2 } from '../../src/tsmc/q2';
import { q3 } from '../../src/tsmc/q3';

describe(`Quest 1`, () => {
    const cases = [

    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = q1(c[0]);
            expect(res).toEqual(c[1]);
        });
    });
});

describe(`Quest 2`, () => {
    const cases = [];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = q2(c[0]);
            expect(res).toEqual(c[1]);
        });
    });
});

describe(`Quest 3`, () => {
    const cases = [];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = q3(c[0]);
            expect(res).toEqual(c[1]);
        });
    });
});
