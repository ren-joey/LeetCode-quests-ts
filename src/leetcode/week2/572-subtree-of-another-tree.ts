/**
 * 572. Subtree of Another Tree
 * Algorithm: Binary Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
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

const compare = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null && subRoot === null) return true;
    if (root === null || subRoot === null) return false;
    if (root.val !== subRoot.val) return false;
    return compare(root.left, subRoot.left) && compare(root.right, subRoot.right);
};

const search = (root: TreeNode | null, subRoot: TreeNode): boolean => {
    let res = false;
    if (root === null) return false;
    if (root.val === subRoot.val) res = compare(root, subRoot);
    return res || search(root.left, subRoot) || search(root.right, subRoot);
};

export const isSubtree = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null && subRoot === null) return true;
    if (subRoot === null) return true;
    if (root === null) return false;
    return search(root, subRoot);
};