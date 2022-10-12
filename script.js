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

tree.insert(31);
tree.insert(69);

prettyPrint(tree.root);

tree.delete(67);

prettyPrint(tree.root);

tree.delete(31);

prettyPrint(tree.root);

tree.delete(-65);

prettyPrint(tree.root);

console.log(tree.levelOrder());
console.log(tree.levelOrder((a) => a + 1));

console.log(tree.preorder());
console.log(tree.preorder((a) => a + 1));

console.log(tree.inorder());
console.log(tree.inorder((a) => a + 1));

console.log(tree.postorder());
console.log(tree.postorder((a) => a + 1));

prettyPrint(tree.root);
