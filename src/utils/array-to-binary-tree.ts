/**
 * Array to Binary Tree
 */

import { TreeNode } from "../leetcode/classes/tree-node";

export const arrayToBinaryTree = (array: (number|null)[]): TreeNode | null => {
    if (array.length === 0 || array[0] === null) return null;

    const root = new TreeNode(array[0]);
    const queue: TreeNode[] = [root];

    for (let i = 1; i < array.length; i += 2) {
        const current = queue.shift()!;

        if (array[i] !== null) {
            current.left = new TreeNode(array[i]!);
            queue.push(current.left);
        }

        if (array[i + 1] !== null && i + 1 < array.length) {
            current.right = new TreeNode(array[i + 1]!);
            queue.push(current.right);
        }
    }

    return root;
};