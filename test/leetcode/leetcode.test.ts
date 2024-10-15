import { describe, expect, test } from "@jest/globals";

import {
    accountsMerge,
    lengthOfLIS,
    longestCommonSubsequence,
    rotate
} from '../../src/quests/leetcode';

const stringSort = (a: string, b: string) => a[0].localeCompare(b[0]);

describe(`LeetCode 721-accounts-merge.ts`, () => {
    const cases: any[] = [
        [
            [["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith@mail.com", "john00@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]],
            [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]]
        ],
        [
            [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]],
            [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
        ]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res: any[] = accountsMerge(c[0]);
            expect(res.sort(stringSort)).toEqual(c[1].sort(stringSort));
        });
    });
});

describe(`LeetCode 300-longest-increasing-subsequence.ts`, () => {
    const cases: any[] = [
        [[10,9,2,5,3,7,101,18], 4],
        [[0,1,0,3,2,3], 4],
        [[7,7,7,7,7,7,7], 1]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            expect(lengthOfLIS(c[0])).toEqual(c[1]);
        });
    });
});

describe(`LeetCode 1143-longest-common-subsequence.ts`, () => {
    const cases: any[] = [
        ["abcde", "ace", 3],
        ["abc", "abc", 3],
        ["abc", "def", 0],
        ["adddcf", "def", 2],
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            expect(longestCommonSubsequence(c[0], c[1])).toEqual(c[2]);
        });
    });
});

describe(`LeetCode 48-rotate-image.ts`, () => {
    const cases: any[] = [
        [
            [[1,2,3],[4,5,6],[7,8,9]],
            [[7,4,1],[8,5,2],[9,6,3]]
        ],
        [
            [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],
            [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
        ]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            rotate(c[0]);
            expect(c[0]).toEqual(c[1]);
        });
    });
});