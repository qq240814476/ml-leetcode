/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if(!root) return true
  // 中序遍历
  const stack = []
  let max = null

  while(root){
    if(root.left){
      stack.push(root)
      let left = root.left
      root.left = null
      root = left
    }else{
      if(max !== null && root.val <= max) return false
      max = root.val
      root = root.right || stack.pop()
    }
  }
  return true
};
// @lc code=end

