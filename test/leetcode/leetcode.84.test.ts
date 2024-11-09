import { describe, expect, test } from "@jest/globals";

import {
    maxPathSum,
} from '../../src/leetcode';

import { arrayToBinaryTree } from "../../src/utils/array-to-binary-tree";

describe(`124. Binary Tree Maximum Path Sum`, () => {
    const cases: [number[], number][] = [
        [[2, 3, 5, 6, 2, 3], 12],
        // [[2, 1, 5, 6, 2, 3], 10],
        // [[2, 4], 4]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected output: ${c[1]}
            `, () => {
            const head = arrayToBinaryTree(c[0]);
            expect(maxPathSum(head)).toEqual(c[1]);
        });
    });
});