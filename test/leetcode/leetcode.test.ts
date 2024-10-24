import { describe, expect, test } from "@jest/globals";

import {
    accountsMerge,
    lengthOfLIS,
    longestCommonSubsequence,
    rotate_48,
    findAnagrams,
    findMinHeightTrees,
    leastInterval,
    LRUCache,
    topKFrequent,
    rotate_189,
    decodeString,
    getFood,
    validTree,
    myPow,
    inorderSuccessor,
    countComponents
} from '../../src/leetcode';
import { arrayToBinaryTree } from "../../src/utils/array-to-binary-tree";

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
            rotate_48(c[0]);
            expect(c[0]).toEqual(c[1]);
        });
    });
});

describe(`LeetCode 438-find-all-anagrams-in-a-string.ts`, () => {
    const cases: any[] = [
        ["cbaebabacd", "abc", [0,6]],
        ["abab", "ab", [0,1,2]],
        ["a", "a", [0]],
        ["abab", "abab", [0]],
        ["abab", "ababa", []]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const res = findAnagrams(c[0], c[1]);
            expect(res).toEqual(c[2]);
        });
    });
});

describe(`LeetCode 310-minimum-height-trees.ts`, () => {
    const cases: any[] = [
        [4, [[1,0],[1,2],[1,3]], [1]],
        [6, [[3,0],[3,1],[3,2],[3,4],[5,4]], [3,4]],
        [1, [], [0]],
        [2, [[0,1]], [0,1]],
        [2, [[1,0]], [0,1]],
        [3, [[0,1],[0,2]], [0]],
        [4, [[0,1],[1,2],[2,3]], [1,2]]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const res = findMinHeightTrees(c[0], c[1]);
            expect(res).toEqual(c[2]);
        });
    });
});

describe(`LeetCode 621-task-scheduler.ts`, () => {
    const cases: any[] = [
        [["A","A","A","A","B","B","C"], 2, 10],
        [["A","A","A","B","B","B"], 2, 8],
        [["A","C","A","B","D","B"], 1, 6],
        [["A","A","A","B","B","B"], 3, 10]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const res = leastInterval(c[0], c[1]);
            expect(res).toEqual(c[2]);
        });
    });
});

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

describe(`LeetCode 692-top-k-frequent-words.ts`, () => {
    const cases: any[] = [
        [["the", "is", "the", "the", "the", "is", "the"], 1, ["the"]],
        // [["i", "love", "leetcode", "i", "love", "coding"], 2, ["i", "love"]],
        // [["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4, ["the", "is", "sunny", "day"]]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const res = topKFrequent(c[0], c[1]);
            expect(res).toEqual(c[2]);
        });
    });
});

describe(`LeetCode 189-rotate-array.ts`, () => {
    const cases: any[] = [
        [[1,2,3,4,5,6,7], 3, [5,6,7,1,2,3,4]],
        [[-1,-100,3,99], 2, [3,99,-1,-100]],
        [[1,2,3,4,5,6,7], 3, [5,6,7,1,2,3,4]],
        [[1,2,3,4,5,6,7], 10, [5,6,7,1,2,3,4]],
        [[1,2,3,4,5,6,7], 0, [1,2,3,4,5,6,7]],
        [[1,2,3,4,5,6,7], 7, [1,2,3,4,5,6,7]],
        [[1,2,3,4,5,6,7], 1, [7,1,2,3,4,5,6]],
        [[1,2,3,4,5,6,7], 2, [6,7,1,2,3,4,5]],
        [[1,2,3,4,5,6,7], 4, [4,5,6,7,1,2,3]],
        [[1,2,3,4,5,6,7], 5, [3,4,5,6,7,1,2]],
        [[1,2,3,4,5,6,7], 6, [2,3,4,5,6,7,1]]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            rotate_189(c[0], c[1]);
            expect(c[0]).toEqual(c[2]);
        });
    });
});

describe(`LeetCode 394-decode-string.ts`, () => {
    const cases: any[] = [
        ["3[a]2[bc]", "aaabcbc"],
        // ["3[a2[c]]", "accaccacc"],
        // ["2[abc]3[cd]ef", "abcabccdcdcdef"],
        // ["abc3[cd]xyz", "abccdcdcdxyz"],
        // ["100[leetcode]", "leetcode".repeat(100)]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = decodeString(c[0]);
            expect(res).toEqual(c[1]);
        });
    });
});

describe(`LeetCode 1730-shortest-path-to-get-food.ts`, () => {
    const cases: any[] = [
        [[["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]], 3],
        [[["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]], -1],
        [[["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]], 6],
        [[["O","*"],["#","O"]], 2],
        [[["X","*"],["#","X"]], -1]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}}
            Expected: ${c[1]}
            `, () => {
            const res = getFood(c[0]);
            expect(res).toBe(c[1]);
        });
    });
});

describe(`LeetCode 261-graph-valid-tree.ts`, () => {
    const cases: any[] = [
        [5, [[0,1],[0,2],[0,3],[1,4]], true],
        // [5, [[0,1],[1,2],[2,3],[1,3],[1,4]], false]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const res = validTree(c[0], c[1]);
            expect(res).toBe(c[2]);
        });
    });
});

describe(`LeetCode 50-powx-n.ts`, () => {
    const cases: any[] = [
        // [2.00000, 10, 1024.00000],
        // [2.10000, 3, 9.26100],
        // [2.00000, -2, 0.25000],
        [-3.0, -5, -0.00412]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const res = myPow(c[0], c[1]);
            expect(res).toBeCloseTo(c[2]);
        });
    });
});

describe(`LeetCode 285-inorder-successor-in-bst.ts`, () => {
    const cases: any[] = [
        [[2,1,3], 1, 2],
        [[5,3,6,2,4,null,null,1], 6, null],
        [[3,null,8,6,7,], 6, 8],
        [[3,9,20,null,null,15,7,8], 8, 15],
        [[3,9,20,null,null,15,7,8,6], 15, 6]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const root = arrayToBinaryTree(c[0]);
            const p = root?.findNode(c[1]);
            if (p === null || p?.val !== c[1]) throw new Error(`Node ${c[1]} not found`);
            const res = inorderSuccessor(root, p!);
            expect(res === null ? res : res.val).toBe(c[2]);
        });
    });
});

describe(`LeetCode 323-number-of-connected-components-in-an-undirected-graph.ts`, () => {
    const cases: any[] = [
        [5, [[0,1],[1,2],[3,4]], 2],
        [5, [[0,1],[1,2],[2,3],[3,4]], 1],
        [0, [], 0],
        [2, [[0,1]], 1],
        [2, [[1,0]], 1],
        [3, [[0,1],[0,2]], 1],
        [4, [[0,1],[1,2],[2,3]], 1]
    ];

    cases.forEach((c) => {
        test(`
            Input: ${c[0]}, ${c[1]}
            Expected: ${c[2]}
            `, () => {
            const res = countComponents(c[0], c[1]);
            expect(res).toBe(c[2]);
        });
    });
});