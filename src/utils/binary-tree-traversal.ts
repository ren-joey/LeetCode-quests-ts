import { TreeNode } from "../leetcode/classes/tree-node";

export class BinaryTreeTraversal {
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

    static traversalToTree(inorder: number[], preorder: number[]): TreeNode | null {
        if (inorder.length === 0) return null;

        const root = new TreeNode(preorder[0]);
        const rootIndex = inorder.indexOf(preorder[0]);

        const leftInorder = inorder.slice(0, rootIndex);
        const rightInorder = inorder.slice(rootIndex + 1);

        const leftPreorder = preorder.slice(1, leftInorder.length + 1);
        const rightPreorder = preorder.slice(leftInorder.length + 1);

        root.left = this.traversalToTree(leftInorder, leftPreorder);
        root.right = this.traversalToTree(rightInorder, rightPreorder);

        return root;
    }
}