import { TreeNode } from '../utils';

function getMinimumDifference(root: TreeNode | null): number {
    let prev: number | null = null
    let minDiff = Infinity

    function inorder(node: TreeNode | null) {
        if (!node) return

        inorder(node.left)

        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev)
        }
        prev = node.val

        inorder(node.right)
    }

    inorder(root)
    return minDiff
}