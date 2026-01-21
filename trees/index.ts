import { Compare, defaultCompare } from "../utils.ts";

class NodeTree<T> {
    key: T;
    left: NodeTree<T> | null;
    right: NodeTree<T> | null;

    constructor (key: T) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree<T> {
    root: NodeTree<T> | null;
    compareFn: (a: T, b: T) => number;

    constructor(compareFn = defaultCompare) {
        this.root = null;
        this.compareFn = compareFn;
    }

    insert(key: T) {
        if (!this.root) {
            this.root = new NodeTree(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    private insertNode(node: NodeTree<T>, key: T) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (!node.left) {
                node.left = new NodeTree(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (!node.right) {
                node.right = new NodeTree(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    inOrderTraverse(callback: (key: T) => void, node: NodeTree<T> | null) {
        if (!node) return;

        this.inOrderTraverse(callback, node.left);
        callback(node.key);
        this.inOrderTraverse(callback, node.right);
    }

    preOrderTraverse(callback: (key: T) => void, node: NodeTree<T> | null) {
        if (!node) return;

        callback(node.key);
        this.inOrderTraverse(callback, node.left);
        this.inOrderTraverse(callback, node.right);
    }

    postOrderTraverse(callback: (key: T) => void, node: NodeTree<T> | null) {
        if (!node) return;

        callback(node.key);
        this.inOrderTraverse(callback, node.left);
        this.inOrderTraverse(callback, node.right);
    }

    get min() {
        return this.minNode(this.root!);
    }

    private minNode(node: NodeTree<T>) {
        let current = node;

        while (node.left != null) {
            current = node.left;
            node = node.left;
        }

        return current;
    }

    get max() {
        return this.maxNode(this.root!);
    }

    private maxNode(node: NodeTree<T>) {
        let current = node;

        while (node.right) {
            current = node.right;
            node = node.right;
        }

        return current;
    }

    search(key: T): boolean {
        return this.searchNode(this.root, key);
    }

    private searchNode(node: NodeTree<T> | null, key: T): any {
        if (!node) return false;

        if (this.compareFn(key, node.key), Compare.LESS_THAN) return this.searchNode(node.left, key);
        else if (this.compareFn(key, node.key), Compare.BIGGER_THAN) return this.searchNode(node.right, key);
        else return true;
    }

    remove(key: T) {
        this.root = this.removeNode(this.root!, key);
    }

    private removeNode(node: NodeTree<T> | null, key: T) {
        if (!node) return null;

        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
        } else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }

            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }

        return node;
    }
}

const tree = new BinarySearchTree<number>();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(6);
tree.insert(3);
tree.insert(13);
tree.insert(14);
tree.insert(12);
tree.insert(20);
tree.insert(18);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(25);

const log = (value: any) => console.log(value);

// tree.inOrderTraverse(tree.root, log);
// tree.preOrderTraverse(tree.root, log);
// tree.postOrderTraverse(log, tree.root);

log(tree.max);