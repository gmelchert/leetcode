class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function invertTree(root: TreeNode): TreeNode {
    const traverse = (node: TreeNode) => {
        if (!node.left && !node.right) return node;

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        node.left && traverse(node.left);
        node.right && traverse(node.right);

        return node;
    }

    traverse(root);

    return root;
}

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;

    if (root.right) invertTree(root.right);

    let isSymmetric = true;

    const traverseTree = (rightNode: TreeNode | null, leftNode: TreeNode | null) => {
        if (!rightNode && !leftNode) return;
        if (rightNode?.val !== leftNode?.val) return isSymmetric = false;

        traverseTree(rightNode?.left || null, leftNode?.left || null);
        traverseTree(rightNode?.right || null, leftNode?.right || null);
    };

    traverseTree(root.left, root.right);

    return isSymmetric;
};