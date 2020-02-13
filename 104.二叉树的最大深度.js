/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  return depth(root, 1)
};
var depth = function(root, deep) {
  if(!root) return deep - 1
  let lMax = depth(root.left, deep+1)
  let rMax = depth(root.right, deep+1)
  return Math.max(lMax, rMax)
}
// @lc code=end

