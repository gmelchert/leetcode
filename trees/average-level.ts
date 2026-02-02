import { TreeNode } from "../utils";

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];

    const results: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length) {
        const levelSize = queue.length;
        let sum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            sum += node.val;

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        results.push(sum / levelSize);
    }

    return results;
};