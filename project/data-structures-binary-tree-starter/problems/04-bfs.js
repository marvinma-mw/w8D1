// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){
    if (!root) return [];


    let arr1 = [root];
    let arr2 = [];


    while(arr1.length) {
        let node = arr1.shift() //a

        arr2.push(node.val)

        if (node.left){
            arr1.push(node.left);
        }

        if (node.right) {
                arr1.push(node.right)
            }
        }
        return arr2
}




module.exports = { bfs };
