/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  return dfs(root, sum)
};
var dfs = function(root, sum){
  if(!root) return false
  sum -= root.val
  if(sum === 0 && !root.left && !root.right) return true
  if(dfs(root.left, sum) || dfs(root.right, sum)) return true
  return false
}

// @lc code=end

