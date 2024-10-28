import { describe, expect, test } from "@jest/globals";

import {
    mergeKLists
} from '../../src/leetcode';

import {
    arrayToLinkedList
} from '../../src/utils/array-to-linked-list';

import {
    linkedListToArray
} from '../../src/utils/linked-list-to-array';

import { ListNode } from "../../src/leetcode/classes/list-node";

describe(`23. Merge k Sorted Lists`, () => {
    const cases: [number[][], number[]][] = [
        [[[1, 4, 5], [1, 3, 4], [2, 6]], [1, 1, 2, 3, 4, 4, 5, 6]],
        [[], []],
        [[[]], []]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected output: ${c[1]}
            `, () => {
            const input = c[0].map(arr => arrayToLinkedList(arr));
            const output = linkedListToArray(mergeKLists(input as ListNode[]));
            expect(output).toEqual(c[1]);
        });
    });
});
