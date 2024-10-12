/**
 * 104. Maximum Depth of Binary Tree
 * Algorithm: Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

const getHeight = (root: TreeNode | null): number => {
    if (root === null) return 0;
    const left_h = getHeight(root.left);
    const right_h = getHeight(root.right);
    return Math.max(left_h, right_h) + 1;
};

export const maxDepth = (root: TreeNode | null): number => {
    return getHeight(root);
};