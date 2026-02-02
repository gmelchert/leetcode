import { TreeNode } from '../utils';

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    let count = 1;
    
    const q = [root];

    while (q.length) {
        const node = q.shift()!;
        if (node.left) {
            count++;
            q.push(node.left);
        }
        if (node.right) {
            count++;
            q.push(node.right);
        }
    }

    return count;
};