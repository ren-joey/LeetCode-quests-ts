/**
 * TODO:
 * 437. Path Sum III
 * Algorithm: DFS
 * https://leetcode.com/problems/path-sum-iii/
 *
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
 * The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 *
 * Example 1:
 *      Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 *      Output: 3
 *      Explanation: The paths that sum to 8 are shown.
 *
 * Example 2:
 *      Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 *      Output: 3
 *
 * Constraints:
 *      The number of nodes in the tree is in the range [0, 1000].
 *      -109 <= Node.val <= 109
 *      -1000 <= targetSum <= 1000
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

type Hash = {[n: number]: number};

const helper = (root: TreeNode | null, currSum: number, target: number, preSum: Hash): number => {
    if (root === null) {
        return 0;
    }

    currSum += root.val;
    let res = preSum[currSum - target] || 0;
    preSum[currSum] = (preSum[currSum] || 0) + 1;

    res += helper(root.left, currSum, target, preSum) + helper(root.right, currSum, target, preSum);
    preSum[currSum] = (preSum[currSum] || 0) - 1;
    return res;
};


export const pathSum = (root: TreeNode | null, targetSum: number): number => {
    const preSum: Hash = {};
    preSum[0] = 1;
    return helper(root, 0, targetSum, preSum);
};
