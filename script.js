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

const createRandomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));

const data = createRandomArray(16, 1000);
const tree = new Tree(data);

console.log(prettyPrint(tree.root));

console.log(tree.isBalanced());

console.log('Level order:');
console.log(tree.levelOrder());

console.log('Preorder:');
console.log(tree.preorder());

console.log('Inorder:');
console.log(tree.inorder());

console.log('Postorder:');
console.log(tree.postorder());

tree.insert(100);
tree.insert(101);
tree.insert(102);
tree.insert(103);
tree.insert(104);

console.log(prettyPrint(tree.root));

console.log(tree.isBalanced());

console.log(prettyPrint(tree.rebalance().root));
console.log(tree.isBalanced());

console.log('Level order:');
console.log(tree.levelOrder());

console.log('Preorder:');
console.log(tree.preorder());

console.log('Inorder:');
console.log(tree.inorder());

console.log('Postorder:');
console.log(tree.postorder());
