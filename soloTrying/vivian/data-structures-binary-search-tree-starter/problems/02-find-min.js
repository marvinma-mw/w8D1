
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.
// You may use your BST implementation to test this out.
function findMin(root) {
    if (!this.root) return null

    let min = root

    while(min.left) {
      min = min.left
    }
    return min 
}


module.exports = {
  findMin
};
