import { describe, expect, test } from "@jest/globals";

import {
    ladderLength
} from '../../../src/leetcode';

describe(`127. Word Ladder`, () => {
    const cases: [string, string, string[], number][] = [
        ["hit", "cog", ["hot","dot","dog","lot","log","cog"], 5],
        ["hit", "cog", ["hot","dot","dog","lot","log"], 0]
    ];

    cases.forEach((c, idx) => {
        test(`Case ${idx+1}`, () => {
            expect(ladderLength(c[0], c[1], c[2])).toEqual(c[3]);
        });
    });
});
