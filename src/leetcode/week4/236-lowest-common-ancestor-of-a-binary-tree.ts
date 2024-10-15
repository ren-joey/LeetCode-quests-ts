/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * Algorithm: Binary Tree, Recursion
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
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

export const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
    if (root === null || p === null || q === null) return null;

    const track = (node: TreeNode | null, target: TreeNode, path: TreeNode[]): TreeNode[] => {
        if (node === null) return [];
        else if (node === target) return [...path, node];
        else {
            path.push(node);
            const p1 = track(node.left, target, path);
            const p2 = track(node.right, target, path);
            if (p1.length === 0 && p2.length === 0) {
                path.pop();
                return [];
            } else if (p1.length !== 0) return p1;
            else return p2;
        }
    };

    const l = track(root, p, []);
    const r = track(root, q, []);
    let idx = 0;
    let prevTrue = false;
    let res: TreeNode | null = null;
    while (res === null && idx < l.length && idx < r.length) {
        if (l[idx] === r[idx]) {
            prevTrue = true;
            if (l[idx] === p || l[idx] === q) res = l[idx];
        }
        else if (l[idx] !== r[idx] && prevTrue === true) res = l[idx-1];
        idx += 1;
    }
    return res;
};