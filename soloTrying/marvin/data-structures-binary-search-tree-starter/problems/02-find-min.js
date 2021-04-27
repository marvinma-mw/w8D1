
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.

const { BST } = require("./01-bst");

// You may use your BST implementation to test this out.
function findMin(root) {

// iteratively
  if (!root) return null;

  let min = root;

  while (min.left !== null){
    min = min.left;
 }

 return min;

 // recursive method

  // if(!root)return null;

  // if(root.left) return findMin(root.left);

  // return root;
}


function findMax(root) {

  if (!root) return null;
  let max = root;

  while(max.right !== null){
    max = max.right;
  }

  return max;
}


module.exports = {
  findMin
};
