/**
 * 98. Validate Binary Search Tree
 * Algorithm: DFS, Binary Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
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

const search = (node: TreeNode | null, max: number, min: number): boolean => {
    if (node === null) return true;
    if (node.val >= max || node.val <= min) return false;
    return search(node.left, node.val, min) && search(node.right, max, node.val);
};

export const isValidBST = (root: TreeNode | null): boolean => {
    return search(root, Infinity, -Infinity);
};