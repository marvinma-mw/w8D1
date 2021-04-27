const { returns } = require("chai-spies");

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
    // Initialize an empty binary search tree
    constructor() {
        this.root = null;
    }

    // Insert a node into the binary search tree
    insert(val, currentNode=this.root) {
        // Your code here
        if(!this.root){
            this.root = new TreeNode(val);
            return;
        }

        if(val<currentNode.val){
            if (!currentNode.left){
                currentNode.left= new TreeNode(val);
            }else{
            this.insert(val,currentNode.left)
        }
        }else{
            if (!currentNode.right){
                currentNode.right= new TreeNode(val);
            }else{
            this.insert(val,currentNode.right)
        }
        }
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        if(!currentNode) return false;

        if(val<currentNode.val){
            return this.searchRecur(val,currentNode.left);
        }else if (val>currentNode.val){
            return this.searchRecur(val, currentNode.right)
        }else{
            return true;
        }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
        if (!this.root) return false;

        let stack = [this.root];
        let nodes = [];
        while(stack.length) {
            let node = stack.shift() //a
            nodes.push(node.val)
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right)
            }

        if(nodes.includes(val)){return true;
        }else{
            return false;
        }
}
}



function getHeight(root) {
    if(!root) return -1;
    let leftHeight = getHeight(root.left);
    console.log(leftHeight);
    let rightHeight = getHeight(root.right);
    console.log(rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }

//   let a = new TreeNode('a');
//   let b = new TreeNode('b');
//   let c = new TreeNode('c');
//   let d = new TreeNode('d');
//   let e = new TreeNode('e');
//   let f = new TreeNode('f');
//   let g = new TreeNode('g');

//   a.left = b;
//   a.right = c;
//   b.left = d;
//   b.right = e;
//   c.left = f;
//   c.right = g;

//   console.log(getHeight(b));



let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(16);
tree.insert(1);
tree.insert(7);
tree.insert(16);


console.log(tree)





module.exports = {
    TreeNode,
    BST
};
