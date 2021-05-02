/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * TODO 广度遍历
 * @param {*} root 
 * @returns 
 */
// var bfs = (node) => {
//   let num = 0
//   if(!node) return num;
//   var queue = [];

//   num++;
//   if(node.left) num++;
//   queue.push(node.left);
//   if(node.right) num++;
//   queue.push(node,right);

// }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  // return bfs(root);
  if(!root) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
// @lc code=end

