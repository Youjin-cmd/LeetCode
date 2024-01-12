/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function(root) {
  if (!root) {
      return false;
  }
  
  const leftStack = [];
  const rightStack = [];

  function leftDfs(current) {
    if (!current) {
        leftStack.push(null);
        return;
    }
    
    leftStack.push(current.val);

    leftDfs(current.right);
    leftDfs(current.left);
  }
  
  leftDfs(root.left);
  
  function rightDfs(current) {
    if (!current) {
        rightStack.push(null);
        return;
    }
    
    rightStack.push(current.val);

    rightDfs(current.left);
    rightDfs(current.right);
  }
  
  rightDfs(root.right);
  
  for (let i = 0; i < leftStack.length; i++) {
    if (leftStack[i] !== rightStack[i]) {
      return false;
    }
  }

  return true;
}