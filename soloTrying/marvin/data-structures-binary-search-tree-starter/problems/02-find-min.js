
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.

const { BST } = require("./01-bst");

// You may use your BST implementation to test this out.
function findMin(root) {
    // Your code here
    // let newNode = new BST(root);

    // if(!newNode.root) return null;

    // let min = newNode.root;

    // while (min.left!== null){
    //   min = min.left;
    // }

    // return min.val;


    // if(!newNode.root) return null;

    // if(newNode.left){
    //   return findMin(newNode.left)
    // }
    // return newNode.val;


    if(!root){
      return null;
   }
   if(root.left){
     return minNode(root.left)
  }
  return root.value
}



module.exports = {
  findMin
};
