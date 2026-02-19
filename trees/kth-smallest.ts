import { TreeNode } from "../utils";

function kthSmallest(root: TreeNode | null, k: number): number {
    if (!root) return 0;

    let count = 0;
    let result = 0;
    
    const inOrder = (node: TreeNode | null) => {
        if (!node) return;

        inOrder(node.left);

        count++;

        if (count === k) {
            result = node.val;
            return;
        }

        inOrder(node.right);
    };

    inOrder(root);
    return result;
};