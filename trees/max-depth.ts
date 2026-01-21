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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let max = 0;

    const depthCounter = (node: TreeNode, level: number = 0) => {
        level++;
        max = Math.max(max, level);
        if (node.left) depthCounter(node.left, level);
        if (node.right) depthCounter(node.right, level);
    }

    depthCounter(root);
    
    return max;
};