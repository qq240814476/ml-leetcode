/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const stack = []
  const res = []
  if(!root) return []

  stack.push(root)
  while(stack.length > 0){
    root = stack.pop()
    res.push(root.val)
    // 从左往右依次入栈
    if(root.left){
      stack.push(root.left)
    }
    if(root.right){
      stack.push(root.right)
    }
  }
  // 逆序存储
  return res.reverse()
};
// @lc code=end

