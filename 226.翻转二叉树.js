/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null
    // [
    //   root.left,
    //   root.right
    // ] = [
    //   invertTree(root.right),
    //   invertTree(root.left)
    // ]
    const newl = invertTree(root.right)
    const newr = invertTree(root.left)
    root.left = newl
    root.right = newr
    return root
};
// @lc code=end

