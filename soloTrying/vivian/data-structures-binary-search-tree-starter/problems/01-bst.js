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
        this.root = null
    }

    // Insert a node into the binary search tree
    insert(val, currentNode=this.root) {
        if (!this.root) {
            this.root = new TreeNode(val)
            return; //the return is needed so that the other conditionals doesn't check
            //for new Nodes. That's why you need a return whenever we're creating a new Node
            //to prevent the domino effect
        }

        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(val)
                return;
            } else {
                this.insert(val, currentNode.left)
            }

        } else {
            if(!currentNode.right) {
                currentNode.right = new TreeNode(val)
                return;
            } else {
                this.insert(val, currentNode.right)
            }
        }
    }

    insertIter(val, currentNode = this.root) {
        // if (!this.root) {
        //     this.root = new TreeNode(val)
        // };

        // while(currentNode) {
        //     if (val < currentNode.val) {
        //         if (!currentNode.left) {
        //             currentNode.left = new TreeNode(val)
        //         }else {
        //             currentNode = currentNode.left
        //         }
        //     } else {
        //         if (!currentNode.right) {
        //             currentNode.right = new TreeNode(val)
        //         } else {
        //             currentNode = currentNode.right
        //         }
        //     }
        // }
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        if (!currentNode) return false;

        if (val < currentNode.val) {
            return this.searchRecur(val, currentNode.left);
        } else if (val > currentNode.val) {
            return this.searchRecur(val, currentNode.right);
        } else {
            return true;
        }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        if (!this.root) return false

        let currentNode = this.root

        while(currentNode) {
           if (currentNode.val === val) return true

           if (val < currentNode.val) { //search left
               if (!currentNode.left) {
                   return false;
               } else {
                   currentNode = currentNode.left
               }
           }

           if (!currentNode.right) {
               return false;
           } else {
               currentNode = currentNode.right
           }
        }
    }
}

module.exports = {
    TreeNode,
    BST
};
