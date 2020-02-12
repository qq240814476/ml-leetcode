/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    const stack = []
    const res = []
    while(root){
      if(root.right) stack.push(root)
      res.push(root.val)
      if(root.left){
        root = root.left
      }else{
        let last = stack.pop()
        root = last ? last.right : false
      }
    }
    return res
};
// @lc code=end

