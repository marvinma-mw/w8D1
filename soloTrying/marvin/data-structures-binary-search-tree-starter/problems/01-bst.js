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
        if(nodes.includes(val)){return true
        }else{
            return false;
        }
}
}

module.exports = {
    TreeNode,
    BST
};
