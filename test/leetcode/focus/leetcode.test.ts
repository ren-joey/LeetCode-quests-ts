import { describe, expect, test } from "@jest/globals";

import {
    serialize,
    deserialize
} from '../../../src/leetcode';
import { arrayToBinaryTree } from "../../../src/utils/array-to-binary-tree";
import { BinaryTreeTraversal } from "../../../src/utils/binary-tree-traversal";

describe('297. Serialize and Deserialize Binary Tree', () => {
    const cases: [(number|null)[]][] = [
        [[1,2,3,null,null,4,5]],
        [[]],
        [[4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]],
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1}
            Input: ${c[0]}
            Expected: ${c[0]}
            `, () => {
            const root = arrayToBinaryTree(c[0]);
            const str = serialize(root);
            const newRoot = deserialize(str);
            expect(
                BinaryTreeTraversal.inOrderTraversal(newRoot)
            ).toEqual(
                BinaryTreeTraversal.inOrderTraversal(root)
            );

            expect(
                BinaryTreeTraversal.preOrderTraversal(newRoot)
            ).toEqual(
                BinaryTreeTraversal.preOrderTraversal(root)
            );
        });
    });
});