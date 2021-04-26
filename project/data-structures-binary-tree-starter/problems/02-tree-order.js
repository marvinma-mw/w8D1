// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
// self-left-right
function preOrderArray(root) {

    if(!root) return [];
    return [root.val,...preOrderArray(root.left),...preOrderArray(root.right)]
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
//left - self - right
function inOrderArray(root) {

    if(!root) return [];
    return [...inOrderArray(root.left),root.val,...inOrderArray(root.right)]
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal. left-right-self
function postOrderArray(root) {
    // Your code here
    if(!root) return [];
    return [...postOrderArray(root.left),...postOrderArray(root.right),root.val]
}

module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
