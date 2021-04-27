// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.

/// pre-order: self, left, right
/// in-order: left, selft, right
/// post-order: left, right, self






function preOrderArray(root, values=[]) {

    // if(!root) return [];

    // values.push(root.val);
    // preOrderArray(root.left,values);
    // preOrderArray(root.right,values);

    // return values;

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
    return [root.val,...preOrderArray(root.left),...preOrderArray(root.right)]

}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root,values=[]) {
    // Your code here
    if(!root) return [];

    inOrderArray(root.left,values);
    values.push(root.val);
    inOrderArray(root.right,values);

    return values;

}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root,values=[]) {
    // Your code here
    if(!root) return [];

    postOrderArray(root.left,values);
    postOrderArray(root.right,values);
    values.push(root.val);

    return values;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
