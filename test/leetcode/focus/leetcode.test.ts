import { describe, expect, test } from "@jest/globals";

import {
    minWindow
} from '../../../src/leetcode';

describe('76. Minimum Window Substring', () => {
    const cases: [string, string, string][] = [
        ["ADOBECODEBANC", "ABC", "BANC"],
        ["a", "a", "a"],
        ["a", "aa", ""],
        ["aa", "aa", "aa"],
        ["aaaaaabab", "aabb", "abab"],
        ["ADOBECODEBANC", "ABC", "BANC"]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            expect(
                minWindow(c[0], c[1])
            ).toEqual(c[2]);
        });
    });
});