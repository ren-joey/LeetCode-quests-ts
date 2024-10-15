/**
 * 101. Symmetric Tree
 * Algorithm: Binary Tree
 * https://leetcode.com/problems/symmetric-tree/
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

// const leftFirst = (root: TreeNode | null, arr: number[]): number[] => {
//     if (root === null) {
//         arr.push(-1);
//         return arr;
//     }
//     arr = leftFirst(root.left, arr);
//     arr = leftFirst(root.right, arr);
//     arr.push(root.val);
//     return arr;
// };

// const rightFirst = (root: TreeNode | null, arr: number[]): number[] => {
//     if (root === null) {
//         arr.push(-1);
//         return arr;
//     }
//     arr = rightFirst(root.right, arr);
//     arr = rightFirst(root.left, arr);
//     arr.push(root.val);
//     return arr;
// };

// function isSymmetric(root: TreeNode | null): boolean {
//     if (root === null) return true;
//     return leftFirst(root.left, []).toString() === rightFirst(root.right, []).toString();
// };

const isMirror = (l: TreeNode|null, r: TreeNode|null): boolean => {
    if (l === null && r === null) return true;
    if (l === null || r === null) return false;
    return l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left);
};

export const isSymmetric = (root: TreeNode | null): boolean => {
    if (root === null) return true;
    return isMirror(root.left, root.right);
};