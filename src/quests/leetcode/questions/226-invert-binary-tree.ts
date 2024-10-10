// 226-invert-binary-tree.ts

/**
 * 226. Invert Binary Tree
 * Algorithm: Tree Traversal
 * https://leetcode.com/problems/invert-binary-tree/
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

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