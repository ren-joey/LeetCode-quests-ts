/**
 * Definition for a binary tree node.
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    public findNode = (val: number): TreeNode | null => {
        if (this.val === val) return this;
        if (this.left) {
            const left = this.left.findNode(val);
            if (left) return left;
        }
        if (this.right) {
            const right = this.right.findNode(val);
            if (right) return right;
        }
        return null;
    };
}