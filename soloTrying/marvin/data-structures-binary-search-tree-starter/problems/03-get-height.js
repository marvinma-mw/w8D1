// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
function getHeight(root) {
  if(!root) return -1;
  let leftHeight = getHeight(root.left);
  debugger;
  let rightHeight = getHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

module.exports = {
  getHeight
};
