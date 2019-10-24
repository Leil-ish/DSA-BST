const BinarySearchTree = require("./BinarySearchTree");

function main() {
    let BST = new BinarySearchTree();
  
    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);
  
    console.log(BST);
  }
  
  main();

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

//This function sums the value of all nodes in tree
//Complexity is 0(n)

function findHeight(tree){
    if (!tree){
      return 0;
    }
    return 1 + Math.max(findHeight(tree.left),findHeight(tree.right));
}

//Complexity would generally be O(h) where (h) is height
//Best case, in tree with only root, would be 0(1)
//Worst case, in asymmetrical tree, would be 0(n)

function isBST(BST){
    if(BST.left){
      if(BST.left.key > BST.key){
        return false;
      }
      if(!isBST(BST.left)){
        return false;
      }
    }
    if(BST.right){
      if(BST.right.key < BST.key){
        return false;
      }
      if(!isBST(BST.right)){
        return false;
      }
    }
    return true;
  }

function thirdLargest(BST) {
    if (!BST.right) {
      if (BST.left !== null) {
        return BST.parent;
      }
      if (!BST.left) {
        if (!BST.parent) {
          return BST;
        }
        return BST.parent.left;
      }
    }
    return thirdLargest(BST.right);
}


function Balanced(tree) {
    if (tree === null) {
      return 0;
    }
  
    let rightCount = height(tree.right);
    let leftCount = height(tree.left);
  
    let result = Math.abs(rightCount - leftCount);
    return result > 1 ? false : true;
}

let isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    return (p.value === q.value) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
  
  //Complexity is O(n) - still linear despite having to run through both trees.
  
  console.log(isSameTree([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));