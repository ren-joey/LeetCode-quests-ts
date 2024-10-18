/**
 * TODO:
 * 662. Maximum Width of Binary Tree
 * Algorithm: BFS
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
 *
 * Given the root of a binary tree, return the maximum width of the given tree.
 * The maximum width of a tree is the maximum width among all levels.
 * The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
 * It is guaranteed that the answer will in the range of a 32-bit signed integer.
 *
 * Example 1:
 *      Input: root = [1,3,2,5,3,null,9]
 *      Output: 4
 *      Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
 *
 * Example 2:
 *      Input: root = [1,3,2,5,null,null,9,6,null,7]
 *      Output: 7
 *      Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
 *
 * Example 3:
 *      Input: root = [1,3,2,5]
 *      Output: 2
 *      Explanation: The maximum width exists in the second level with length 2 (3,2).
 *
 * Constraints:
 *      The number of nodes in the tree is in the range [1, 3000].
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

export const widthOfBinaryTree = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let res = 1;

    // q is a queue of pairs where each pair contains a node and its index
    const q: [TreeNode, number][] = [];

    // Initializing list
    q.push([root, 0]);

    while (q.length > 0) {
        const cnt = q.length;
        // start is the index of root node for first level
        const start = q[0][1];
        const end = q[q.length - 1][1];

        res = Math.max(res, end - start + 1);

        for (let i = 0; i < cnt; i += 1) {
            const [node, idx] = q.shift()!;
            const normalizedIdx = idx - start;

            // if left child exists
            if (node.left !== null) {
                q.push([node.left, 2 * normalizedIdx + 1]);
            }

            // if right child exists
            if (node.right !== null) {
                q.push([node.right, 2 * normalizedIdx + 2]);
            }
        }
    }

    return res;
};