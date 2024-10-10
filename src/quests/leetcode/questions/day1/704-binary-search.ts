/**
 * TODO:
 * 704. Binary Search
 * Algorithm: Binary Search
 * https://leetcode.com/problems/binary-search/
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
