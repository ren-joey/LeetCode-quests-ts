import { describe, expect, test } from '@jest/globals';
import { arrayToBinaryTree } from '../../src/utils/array-to-binary-tree';
import { binaryTreeTraversal } from '../../src/utils/binary-tree-traversal';

describe(`Utils: array-to-binary-tree.ts`, () => {
    const cases = [
        // input, inorder, preorder, postorder
        [[2,1,3], [1,2,3], [2,1,3], [1,3,2]],
        [[5,3,6,2,4,null,null,1], [1,2,3,4,5,6], [5,3,2,1,4,6], [1,2,4,3,6,5]],
        [[3,null,8,6,7], [3,6,8,7], [3,8,6,7], [6,7,8,3]],
        [[3,9,20,null,null,15,7,8], [9,3,8,15,20,7], [3,9,20,15,8,7], [9,8,15,7,20,3]],
        [[3,9,20,null,null,15,7,8,6], [9,3,8,15,6,20,7], [3,9,20,15,8,6,7], [9,8,6,15,7,20,3]]
    ];

    cases.forEach((c, idx) => {
        test(`
            Case ${idx+1} inorder traversal
            Input: ${c[0]}
            Expected: ${c[1]}
            `, () => {
            const res = arrayToBinaryTree(c[0]);
            expect(
                binaryTreeTraversal.inOrderTraversal(res)
            ).toEqual(c[1]);
        });

        if (c[2]) {
            test(`
                Case ${idx+1} preorder traversal
                Input: ${c[0]}
                Expected: ${c[2]}
                `, () => {
                const res = arrayToBinaryTree(c[0]);
                expect(
                    binaryTreeTraversal.preOrderTraversal(res)
                ).toEqual(c[2]);
            });
        }

        if (c[3]) {
            test(`
                Case ${idx+1} postorder traversal
                Input: ${c[0]}
                Expected: ${c[3]}
                `, () => {
                const res = arrayToBinaryTree(c[0]);
                expect(
                    binaryTreeTraversal.postOrderTraversal(res)
                ).toEqual(c[3]);
            });
        }

    });
});