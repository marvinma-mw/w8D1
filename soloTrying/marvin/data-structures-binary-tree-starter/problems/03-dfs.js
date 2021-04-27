// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function dfs(root){
    // if (!root) return [];
    // return [
    //      root.val, ...dfs(root.left), ...dfs(root.right)
    // ]


    // if(!root) return [];

    // let stack = [root];
    // let nodes = [];

    // while (stack.length){
    //     let node = stack.pop();
    //     nodes.push(node.val);

    //     if(node.right) stack.push(node.right);
    //     if(node.left) stack.push(node.left);
    // }
    // return nodes;


    if(!root) return [];
    return [root.val,...dfs(root.left),...dfs(root.right)]
}

module.exports = { dfs };
