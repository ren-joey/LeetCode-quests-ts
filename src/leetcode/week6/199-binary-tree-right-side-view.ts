/**
 * TODO:
 * 199. Binary Tree Right Side View
 * Algorithm: DFS
 * https://leetcode.com/problems/binary-tree-right-side-view/
 *
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 *
 * Example 1:
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 *
 * Example 2:
 * Input: root = [1,null,3]
 * Output: [1,3]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
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

const rightView = (curr: TreeNode | null, result: number[], currDepth: number): void => {
    if (curr === null) {
        return;
    }
    if (currDepth === result.length) {
        result.push(curr.val);
    }

    rightView(curr.right, result, currDepth + 1);
    rightView(curr.left, result, currDepth + 1);
};

export const rightSideView = (root: TreeNode | null): number[] => {
    const result: number[] = [];
    rightView(root, result, 0);
    return result;
};