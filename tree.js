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
    if (node.data === value) return;

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
}
