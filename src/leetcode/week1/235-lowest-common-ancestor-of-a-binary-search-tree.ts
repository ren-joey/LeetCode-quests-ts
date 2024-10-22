/**
 * TODO:
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * Algorithm: Tree Traversal
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

import { TreeNode } from "../classes/tree-node";


export const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
    if (p === null || q === null) return null;

    const max = Math.max(p.val, q.val);
    const min = Math.min(p.val, q.val);

    while (root !== null && (root.val > max || root.val < min)) {
        if (root.val > max) root = root.left;
        else if (root.val < min) root = root.right;
    }

    return root;
};