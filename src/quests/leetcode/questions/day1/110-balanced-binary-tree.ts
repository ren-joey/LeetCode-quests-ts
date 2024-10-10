/**
 * TODO:
 * 110. Balanced Binary Tree
 * Algorithm: AVL Tree
 * https://leetcode.com/problems/balanced-binary-tree/
 */

import { TreeNode } from "../classes/tree-node";

const search = (root: TreeNode|null): number => {
    if (root === null) return 0;
    const left_bf = search(root.left);
    const right_bf = search(root.right);

    if (left_bf === -1 || right_bf === -1) return -1;
    if (Math.abs(left_bf - right_bf) > 1) return -1;

    return Math.max(left_bf, right_bf) + 1;
};

export const isBalanced = (root: TreeNode | null): boolean => {
    return search(root) !== -1;
};
