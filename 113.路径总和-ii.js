/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
let res
var pathSum = function(root, sum) {
  res = []
  dfs(root, sum, [])
  return res
};
var dfs = function(root, sum, path){
  if(!root) return
  path.push(root.val)
  if(root.val === sum && !root.left && !root.right) res.push([...path])
  dfs(root.left, sum-root.val, path)
  dfs(root.right, sum-root.val, path)
  path.pop()
  return
}
// @lc code=end

