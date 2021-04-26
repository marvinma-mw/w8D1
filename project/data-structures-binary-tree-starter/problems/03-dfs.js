// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function dfs(root){
   if (!root) return [];

   //pre-order (self, left, right)
   return [
        root.val, ...dfs(root.left), ...dfs(root.right)
   ]
}

module.exports = { dfs };
