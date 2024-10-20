/**
 * TODO:
 * FIXME: need to know the solution for this problem
 * 863. All Nodes Distance K in Binary Tree
 * Algorithm: Depth-First Search
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 *
 * Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.
 * You can return the answer in any order.
 *
 * Example 1:
 *      Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
 *      Output: [7,4,1]
 *      Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
 *
 * Example 2:
 *      Input: root = [1], target = 1, k = 3
 *      Output: []
 *
 * Constraints:
 *      The number of nodes in the tree is in the range [1, 500].
 *      0 <= Node.val <= 500
 *      All the values Node.val are unique.
 *      target is the value of one of the nodes in the tree.
 *      0 <= k <= 1000
 */

import { TreeNode } from "../classes/tree-node";

export const distanceK = (root: TreeNode | null, target: TreeNode | null, k: number): number[] => {
    const ans: number[] = [];
    const parent: Map<number, TreeNode | null> = new Map();
    const q: (TreeNode | null)[] = [];
    q.push(root);

    while (q.length > 0) {
        const si = q.length;
        for (let i = 0; i < si; i++) {
            const top = q.shift();
            if (top) {
                if (top.left) {
                    parent.set(top.left.val, top);
                    q.push(top.left);
                }
                if (top.right) {
                    parent.set(top.right.val, top);
                    q.push(top.right);
                }
            }
        }
    }

    const visited: Map<number, boolean> = new Map();
    q.push(target);
    while (k-- > 0 && q.length > 0) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const top = q.shift();
            if (top) {
                visited.set(top.val, true);
                if (top.left && !visited.get(top.left.val)) {
                    q.push(top.left);
                }
                if (top.right && !visited.get(top.right.val)) {
                    q.push(top.right);
                }
                const parentNode = parent.get(top.val);
                if (parentNode && !visited.get(parentNode.val)) {
                    q.push(parentNode);
                }
            }
        }
    }

    while (q.length > 0) {
        const node = q.shift();
        if (node) {
            ans.push(node.val);
        }
    }
    return ans;
};
