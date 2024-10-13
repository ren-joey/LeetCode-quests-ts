/**
 * TODO:
 * 102. Binary Tree Level Order Traversal
 * Algorithm: DFS, Binary Tree
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
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

export const levelOrder = (root: TreeNode | null): number[][] => {
    const res: number[][] = [];

    const miner = (root: TreeNode | null, depth: number) => {
        if (root === null) return;
        if (!res[depth]) res[depth] = [root.val];
        else res[depth].push(root.val);
        miner(root.left, depth + 1);
        miner(root.right, depth + 1);
    };

    miner(root, 0);

    return res;
};