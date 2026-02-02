import { TreeNode } from '../utils';

function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];

    const dfs = (node: TreeNode, level: number) => {
        if (!node) return;

        if (level === result.length) {
            result.push(node.val);
        }

        node.right && dfs(node.right, level + 1);
        node.left && dfs(node.left, level + 1);
    }

    root && dfs(root, 0);

    return result;
};