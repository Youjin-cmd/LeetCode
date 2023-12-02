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
const isBalanced = function(root) {
  if (!root) {
    return true;
  }
  
  let result = true;
  
  function find(node) {
    if (!node) {
      return 0;
    }
    
    const left = find(node.left);
    const right = find(node.right);
    
    if (Math.abs(right - left) > 1) {
      result = false;
    }
    
    return Math.max(left, right) + 1;
  }
  
  find(root);
  
  return result;
};