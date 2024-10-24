import { TreeNode } from "../leetcode/classes/tree-node";

export class binaryTreeTraversal {
    static inOrderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];

        const inorder = (node: TreeNode | null): void => {
            if (node === null) return;

            inorder(node.left);
            res.push(node.val);
            inorder(node.right);
        };

        inorder(root);

        return res;
    }

    static preOrderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];

        const preorder = (node: TreeNode | null): void => {
            if (node === null) return;

            res.push(node.val);
            preorder(node.left);
            preorder(node.right);
        };

        preorder(root);

        return res;
    }

    static postOrderTraversal(root: TreeNode | null): number[] {
        const res: number[] = [];

        const postorder = (node: TreeNode | null): void => {
            if (node === null) return;

            postorder(node.left);
            postorder(node.right);
            res.push(node.val);
        };

        postorder(root);

        return res;
    }
}