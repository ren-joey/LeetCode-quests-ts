/**
 * TODO:
 * 108. Convert Sorted Array to Binary Search Tree
 * Algorithm: Convert Array to Binary Search Tree
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
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

const assignTree = (root: TreeNode, nums: number[]) => {
    const mid = Math.round((nums.length - 1) / 2);
    root.val = nums[mid];
    const left = nums.slice(0, mid);
    const right = nums.slice(mid + 1, nums.length);
    if (left.length > 0) {
        const left_node = new TreeNode();
        root.left = left_node;
        assignTree(left_node, left);
    }
    if (right.length > 0) {
        const right_node = new TreeNode();
        root.right = right_node;
        assignTree(right_node, right);
    }
};

export const sortedArrayToBST = (nums: number[]): TreeNode | null => {
    const root = new TreeNode();
    assignTree(root, nums);
    return root;
};