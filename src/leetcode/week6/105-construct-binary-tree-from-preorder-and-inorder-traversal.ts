/**
 * TODO:
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Algorithm: DFS
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 * Example 1:
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 *
 * Example 2:
 * Input: preorder = [-1], inorder = [-1]
 * Output: [-1]
 *
 * Constraints:
 *      1 <= preorder.length <= 3000
 *      inorder.length == preorder.length
 *      -3000 <= preorder[i], inorder[i] <= 3000
 *      preorder and inorder consist of unique values.
 *      Each value of inorder also appears in preorder.
 *      preorder is guaranteed to be the preorder traversal of the tree.
 *      inorder is guaranteed to be the inorder traversal of the tree.
 *
 * References:
 * Preorder, Inorder, Postorder Traversal:
 *      https://www.shubo.io/iterative-binary-tree-traversal/
 */

import { TreeNode } from "../classes/tree-node";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export const buildTree = (preorder: number[], inorder: number[]): TreeNode | null => {
    const build = (preorder: number[], inorder: number[]): TreeNode | null => {
        if (inorder.length === 0) return null;

        const rootVal = preorder.shift()!;
        const root = new TreeNode(rootVal);
        const idx = inorder.indexOf(rootVal);

        root.left = build(preorder, inorder.slice(0, idx));
        root.right = build(preorder, inorder.slice(idx + 1));

        return root;
    };

    return build(preorder, inorder);
};