/**
 * TODO:
 * 103. Binary Tree Zigzag Level Order Traversal
 * Algorithm: BFS
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 *
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 *
 * Example 1:
 *      Input: root = [3,9,20,null,null,15,7]
 *      Output: [[3],[20,9],[15,7]]
 *
 * Example 2:
 *      Input: root = [1]
 *      Output: [[1]]
 *
 * Example 3:
 *      Input: root = []
 *      Output: []
 *
 * Constraints:
 *      The number of nodes in the tree is in the range [0, 2000].
 *      -100 <= Node.val <= 100
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

export const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
    if (root === null) {
        return [];
    }
    const zigzagLevels: number[][] = [];

    let lamp = true;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const length = queue.length;
        const currentLevel: number[] = [];
        if (lamp) {
            for (const node of queue) {
                currentLevel.push(node.val);
            }
        } else {
            for (let i = queue.length - 1; i >= 0; i--) {
                currentLevel.push(queue[i].val);
            }
        }

        zigzagLevels.push(currentLevel);

        for (let i = 0; i < length; i++) {
            const curNode = queue.shift()!;
            if (curNode.left !== null) {
                queue.push(curNode.left);
            }
            if (curNode.right !== null) {
                queue.push(curNode.right);
            }
        }

        lamp = !lamp;
    }
    return zigzagLevels;
};