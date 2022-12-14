import mergeSort from './sort.js';
import Node from './node.js';

export default class Tree {
  constructor(arr) {
    this.arr = mergeSort([...new Set(arr)]);
    this.root = this.buildTree(this.arr, 0, this.arr.length - 1);
  }

  buildTree(arr, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
  }

  insert(value, node = this.root) {
    if (node === null) {
      node = new Node(value);
      return node;
    }
    if (node.data === value) return node;

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  find(value, node = this.root) {
    if (node === null) return null;
    if (value === node.data) return node;

    if (value < node.data) return this.find(value, node.left);
    return this.find(value, node.right);
  }

  findMin(node = this.root) {
    if (node.left === null) return node.data;
    return this.findMin(node.left);
  }

  delete(value, node = this.root) {
    if (node === null) return node;
    if (value > node.data) {
      node.right = this.delete(value, node.right);
    } else if (value < node.data) {
      node.left = this.delete(value, node.left);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      node.data = this.findMin(node.right);
      node.right = this.delete(node.data, node.right);
    }
    return node;
  }

  levelOrder(fn = null) {
    const queue = [this.root];
    const results = [];

    (function handleQueue() {
      if (queue.length === 0) return;

      const node = queue.shift();
      const result = fn === null ? node.data : fn(node.data);
      results.push(result);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);

      handleQueue();
    })();

    return results;
  }

  preorder(fn = null, node = this.root, results = []) {
    if (node === null) return;

    const result = fn === null ? node.data : fn(node.data);
    results.push(result);

    this.preorder(fn, node.left, results);
    this.preorder(fn, node.right, results);

    return results;
  }

  inorder(fn = null, node = this.root, results = []) {
    if (node === null) return;

    this.inorder(fn, node.left, results);

    const result = fn === null ? node.data : fn(node.data);
    results.push(result);

    this.inorder(fn, node.right, results);

    return results;
  }

  postorder(fn = null, node = this.root, results = []) {
    if (node === null) return;

    this.postorder(fn, node.left, results);
    this.postorder(fn, node.right, results);

    const result = fn === null ? node.data : fn(node.data);
    results.push(result);

    return results;
  }

  height(node = this.root) {
    if (node === null) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(value, node = this.root, edges = 0) {
    if (node === null) return;
    if (value === node.data) return edges;

    if (value < node.data) {
      edges += 1;
      return this.depth(value, node.left, edges);
    }
    if (value > node.data) {
      edges += 1;
      return this.depth(value, node.right, edges);
    }
  }

  isBalanced(node = this.root) {
    if (node === null) return true;
    const heightDiff = Math.abs(this.height(node.left) - this.height(node.right));
    return heightDiff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const arr = mergeSort([...new Set(this.inorder())]);
    this.root = this.buildTree(arr, 0, arr.length - 1);
    return this;
  }
}
