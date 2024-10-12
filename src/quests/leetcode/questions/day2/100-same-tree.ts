/**
 * 100. Same Tree
 * Algorithm: Binary Tree
 * https://leetcode.com/problems/same-tree/
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

const search = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (p === null || q === null) return p === q;
    if (p.val !== q.val) return false;
    return search(p.left, q.left) && search(p.right, q.right);
};

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    return search(p, q);
};