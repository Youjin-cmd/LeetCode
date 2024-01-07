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
 * @return {number[]}
 */
function inorderTraversal(root) {
    const result = [];
    
    function dfs(current) {
      if (!current) {
        return;
      }
      
      dfs(current.left);
      result.push(current.val);
      dfs(current.right);
    };
  
    dfs(root);

    return result;
};