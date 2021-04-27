// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){

    if (!root) return [];


    let stack = [root];
    let nodes = [];


    while(stack.length) {
        let node = stack.shift() //a
        nodes.push(node.val)
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right)
        }
        return nodes;

}

module.exports = { bfs };
