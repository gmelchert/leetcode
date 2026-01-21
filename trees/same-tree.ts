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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let isSame = true;

    const traverseNode = (pNode: TreeNode | null, qNode: TreeNode | null) => {
        if (!pNode && !qNode) return;

        if (pNode?.val !== qNode?.val) return isSame = false;

        traverseNode(pNode?.right || null, qNode?.right || null)
        traverseNode(pNode?.left || null, qNode?.left || null)
    }

    traverseNode(p, q);

    return isSame;
};