import Tree from './tree.js';

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const data = [-1, 1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 323, 324, -65];
const tree = new Tree(data);

prettyPrint(tree.root);

tree.insert(31);

prettyPrint(tree.root);

tree.insert(69);

prettyPrint(tree.root);

console.log(tree.find(67));
console.log(tree.find(8));
console.log(tree.find(999));
console.log(tree.find(9));
console.log(tree.find(69));

tree.delete(6345);

prettyPrint(tree.root);

console.log(tree.findMin());
