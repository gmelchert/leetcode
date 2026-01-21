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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

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
};