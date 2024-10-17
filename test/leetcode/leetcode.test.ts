import { describe, expect, test } from "@jest/globals";

import {
    accountsMerge,
    lengthOfLIS,
    longestCommonSubsequence,
    rotate,
    findAnagrams,
    findMinHeightTrees,
    leastInterval,
    LRUCache
} from '../../src/leetcode';

const stringSort = (a: string, b: string) => a[0].localeCompare(b[0]);

// describe(`LeetCode 721-accounts-merge.ts`, () => {
//     const cases: any[] = [
//         [
//             [["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith@mail.com", "john00@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]],
//             [["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]]
//         ],
//         [
//             [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]],
//             [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
//         ]
//     ];

//     cases.forEach((c) => {
//         test(`
//             Input: ${c[0]}
//             Expected: ${c[1]}
//             `, () => {
//             const res: any[] = accountsMerge(c[0]);
//             expect(res.sort(stringSort)).toEqual(c[1].sort(stringSort));
//         });
//     });
// });

// describe(`LeetCode 300-longest-increasing-subsequence.ts`, () => {
//     const cases: any[] = [
//         [[10,9,2,5,3,7,101,18], 4],
//         [[0,1,0,3,2,3], 4],
//         [[7,7,7,7,7,7,7], 1]
//     ];

//     cases.forEach((c) => {
//         test(`
//             Input: ${c[0]}
//             Expected: ${c[1]}
//             `, () => {
//             expect(lengthOfLIS(c[0])).toEqual(c[1]);
//         });
//     });
// });

// describe(`LeetCode 1143-longest-common-subsequence.ts`, () => {
//     const cases: any[] = [
//         ["abcde", "ace", 3],
//         ["abc", "abc", 3],
//         ["abc", "def", 0],
//         ["adddcf", "def", 2],
//     ];

//     cases.forEach((c) => {
//         test(`
//             Input: ${c[0]}, ${c[1]}
//             Expected: ${c[2]}
//             `, () => {
//             expect(longestCommonSubsequence(c[0], c[1])).toEqual(c[2]);
//         });
//     });
// });

// describe(`LeetCode 48-rotate-image.ts`, () => {
//     const cases: any[] = [
//         [
//             [[1,2,3],[4,5,6],[7,8,9]],
//             [[7,4,1],[8,5,2],[9,6,3]]
//         ],
//         [
//             [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],
//             [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//         ]
//     ];

//     cases.forEach((c) => {
//         test(`
//             Input: ${c[0]}
//             Expected: ${c[1]}
//             `, () => {
//             rotate(c[0]);
//             expect(c[0]).toEqual(c[1]);
//         });
//     });
// });

// describe(`LeetCode 438-find-all-anagrams-in-a-string.ts`, () => {
//     const cases: any[] = [
//         ["cbaebabacd", "abc", [0,6]],
//         ["abab", "ab", [0,1,2]],
//         ["a", "a", [0]],
//         ["abab", "abab", [0]],
//         ["abab", "ababa", []]
//     ];

//     cases.forEach((c) => {
//         test(`
//             Input: ${c[0]}, ${c[1]}
//             Expected: ${c[2]}
//             `, () => {
//             const res = findAnagrams(c[0], c[1]);
//             expect(res).toEqual(c[2]);
//         });
//     });
// });

// describe(`LeetCode 310-minimum-height-trees.ts`, () => {
//     const cases: any[] = [
//         [4, [[1,0],[1,2],[1,3]], [1]],
//         [6, [[3,0],[3,1],[3,2],[3,4],[5,4]], [3,4]],
//         [1, [], [0]],
//         [2, [[0,1]], [0,1]],
//         [2, [[1,0]], [0,1]],
//         [3, [[0,1],[0,2]], [0]],
//         [4, [[0,1],[1,2],[2,3]], [1,2]]
//     ];

//     cases.forEach((c) => {
//         test(`
//             Input: ${c[0]}, ${c[1]}
//             Expected: ${c[2]}
//             `, () => {
//             const res = findMinHeightTrees(c[0], c[1]);
//             expect(res).toEqual(c[2]);
//         });
//     });
// });

// describe(`LeetCode 621-task-scheduler.ts`, () => {
//     const cases: any[] = [
//         [["A","A","A","A","B","B","C"], 2, 10],
//         [["A","A","A","B","B","B"], 2, 8],
//         [["A","C","A","B","D","B"], 1, 6],
//         [["A","A","A","B","B","B"], 3, 10]
//     ];

//     cases.forEach((c) => {
//         test(`
//             Input: ${c[0]}, ${c[1]}
//             Expected: ${c[2]}
//             `, () => {
//             const res = leastInterval(c[0], c[1]);
//             expect(res).toEqual(c[2]);
//         });
//     });
// });

describe(`LeetCode 146-lru-cache.ts`, () => {
    const cases: any[] = [
        [[2], [[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]], [null, null, 1, null, -1, null, -1, 3, 4]],
        [[2], [[2, 1], [2, 2], [2], [1, 1], [4, 1], [2]], [null, null, 2, null, null, -1]]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const lRUCache = new LRUCache(c[0][0]);
            const res: any[] = [];
            c[1].forEach((op: number[]) => {
                if (op.length === 1) {
                    res.push(lRUCache.get(op[0]));
                } else {
                    res.push(lRUCache.put(op[0], op[1]));
                }
            });

            c[2] = c[2].map((v: number | null) => v === null ? undefined : v);
            expect(res).toEqual(c[2]);
        });
    });
});