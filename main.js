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

function sameBST(arr1, arr2) {
    if (arr1.length !== arr2.length) false;
    if (arr1[0] !== arr2[0]) false;
  
    let left1 = [];
    let right1 = [];
    let left2 = [];
    let right2 = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] < arr1[0]) {
        left1.push(arr1[i]);
      } else {
        right1.push(arr1[i]);
      }
      if (arr2[i] < arr2[0]) {
        left2.push(arr2[i]);
      } else {
        right2.push(arr2[i]);
      }
    }
  
    console.log('left1', left1);
    console.log('right1', right1);
    console.log('left2', left2);
    console.log('right2', right2);
  
    if (right1.length === right2.length) {
      for (let i = 0; i < right1.length; i++) {
        if (right1[i] !== right2[i]) {
          return false;
        } else if (left1[0] !== left2[i]) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
  
  //Complexity is O(n) - still linear despite having to run through both trees.
  
  console.log(sameBST([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));