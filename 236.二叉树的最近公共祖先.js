/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // 0、若当前节点为null、p、q之一，直接返回当前节点
  // 1、若左子树上存在公共节点（返回值非p、q），则函数返回值为左子树返回值，不需再遍历右子树
  // 2、若左子树返回null，则函数返回值为右子树返回值
  // 3、若左子树、右子树返回值均为非null，则肯定为一个p，一个q，则公共节点为当前节点
  // 4、最后一种情况，即左子树返回非null，右子树返回null，则函数返回值为左子树返回值

  if(root === null || root === p || root === q) return root

  let left = lowestCommonAncestor(root.left, p, q)

  if(left !== null && left !== p && left !== q) return left

  let right = lowestCommonAncestor(root.right, p, q)

  if(left !== null && right !== null) return root

  else return left ? left : right
};
// @lc code=end

