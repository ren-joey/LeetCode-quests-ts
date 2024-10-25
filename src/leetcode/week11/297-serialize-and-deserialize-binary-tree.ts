/**
 * TODO:
 * 297. Serialize and Deserialize Binary Tree
 * Algorithm: BFS, Queue
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 *
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 *
 * Example 1:
 *      Input: root = [1,2,3,null,null,4,5]
 *      Output: [1,2,3,null,null,4,5]
 *
 * Example 2:
 *      Input: root = []
 *      Output: []
 *
 * Constraints:
 *      The number of nodes in the tree is in the range [0, 104].
 *      -1000 <= Node.val <= 1000
 */

import { BinaryTreeTraversal } from "../../utils/binary-tree-traversal";
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

const NN = 'null';
const spliter = ',';

const buildString = (node: TreeNode | null, sb: string[]): void => {
    if (node === null) {
        sb.push(NN);
    } else {
        sb.push(node.val.toString());
        buildString(node.left, sb);
        buildString(node.right, sb);
    }
};

const buildTree = (nodes: string[]): TreeNode | null => {
    const val = nodes.shift();
    if (val === NN) {
        return null;
    }
    const node = new TreeNode(parseInt(val!));
    node.left = buildTree(nodes);
    node.right = buildTree(nodes);
    return node;
};

/*
 * Encodes a tree to a single string.
 */
export const serialize = (root: TreeNode | null): string => {
    const sb: string[] = [];
    buildString(root, sb);
    return sb.join(spliter);
};

/*
 * Decodes your encoded data to tree.
 */
export const deserialize = (data: string): TreeNode | null => {
    const nodes = data.split(spliter);
    return buildTree(nodes);
};

/*
 * Encodes a tree to a single string.
 */
export const serialize_exceeded_stack_size = (root: TreeNode | null): string => {
    const inorder = BinaryTreeTraversal.inOrderTraversal(root).join('');
    const preorder = BinaryTreeTraversal.preOrderTraversal(root).join('');
    return `${inorder},${preorder}`;
};

/*
 * Decodes your encoded data to tree.
 */
export const deserialize_exceeded_stack_size = (data: string): TreeNode | null => {
    const [inorder, preorder] = data.split(',');
    const inorderArr = inorder.split('').map(Number);
    const preorderArr = preorder.split('').map(Number);
    return BinaryTreeTraversal.traversalToTree(inorderArr, preorderArr);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */