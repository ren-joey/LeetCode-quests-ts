/**
 * 226. Invert Binary Tree
 * Algorithm: Tree Traversal
 * https://leetcode.com/problems/invert-binary-tree/
 */

import { TreeNode } from "../classes/tree-node";

const swap = (node: TreeNode | null): void => {
    if (node === null) return;
    if (node.left !== null) swap(node.left);
    if (node.right !== null) swap(node.right);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
};

export const invertTree = (root: TreeNode | null): TreeNode | null => {
    if (root === null) return root;
    swap(root);
    return root;
};