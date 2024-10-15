/**
 * TODO:
 * 543. Diameter of Binary Tree
 * Algorithm: Binary Tree Traversal
 * https://leetcode.com/problems/diameter-of-binary-tree/
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

let max = 0;

const getHeight = (root: TreeNode | null): number => {
    if (root === null) return 0;
    const left_h = getHeight(root.left);
    const right_h = getHeight(root.right);
    const sum = left_h + right_h;
    if (sum > max) max = sum;
    return Math.max(left_h, right_h) + 1;
};

export const diameterOfBinaryTree = (root: TreeNode | null): number => {
    max = 0; // reset
    if (root === null) return 0;
    getHeight(root);
    return max;
};
