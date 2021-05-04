/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//! dp[0][0] 代表 父不放 子也不放, 此时覆盖整棵树最小监控器数量
// const getDP = (node, dp) => {
//   if(!node){
//     dp[0][0] = 0;
//     dp[0][1] = Number.MAX_SAFE_INTEGER;
//     dp[1][0] = 0;
//     dp[1][1] = Number.MAX_SAFE_INTEGER;
//     return;
//   }
//   if(!node.left && !node.right){
//     dp[0][0] = Number.MAX_SAFE_INTEGER;
//     dp[0][1] = 1;
//     dp[1][0] = 0;
//     dp[1][1] = 1;
//     return;
//   }
//   const l = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
//   r = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
//   getDP(node.left, l);
//   getDP(node.right, r);
//   dp[0][0] = Math.min(l[0][1] + r[0][0], l[0][0] + r[0][1], l[0][1] + r[0][1]);
//   dp[1][0] = Math.min(dp[0][0], l[0][0] + r[0][0]);
//   dp[0][1] = Math.min(l[1][0] + r[1][0], l[1][1] + r[1][0], l[1][0] + r[1][1], l[1][1] + r[1][1])+ 1;
//   dp[1][1] = dp[0][1];
//   return;
// }

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var minCameraCover = function(root) {
//   const dp = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
//   getDP(root, dp);
//   // dp 上升为 根节点, 所以 父肯定放不了摄像头, 只考虑 dp[0][0], dp[0][1] 取极小值即可
//   return Math.min(dp[0][0], dp[0][1])
// };

// const getDP = (node, dp) => {
//   if(!node){
//     dp[0][0] = 0;
//     dp[0][1] = Number.MAX_SAFE_INTEGER;
//     dp[1][0] = 0;
//     dp[1][1] = Number.MAX_SAFE_INTEGER;
//     return;
//   }
//   if(!node.left && !node.right){
//     dp[0][0] = Number.MAX_SAFE_INTEGER;
//     dp[0][1] = 1;
//     dp[1][0] = 0;
//     dp[1][1] = 1;
//     return;
//   }
//   const l = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
//   r = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
//   getDP(node.left, l);
//   getDP(node.right, r);

//   dp[0][0] = Math.min(l[0][1] + r[0][0], l[0][0] + r[0][1], l[0][1] + r[0][1]);
//   dp[1][0] = Math.min(dp[0][0], l[0][0] + r[0][0]);
//   dp[0][1] = Math.min(l[1][0] + r[1][0], l[1][1] + r[1][0], l[1][0] + r[1][1], l[1][1] + r[1][1]) + 1;
//   dp[1][1] = dp[0][1];
//   return;
// }

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
//  var minCameraCover = function(root) {
//   const dp = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
//   getDP(root, dp);
//   // dp 上升为 根节点, 所以 父肯定放不了摄像头, 只考虑 dp[0][0], dp[0][1] 取极小值即可
//   return Math.min(dp[0][0], dp[0][1]);
// };

const getDP = (node, dp) => {
  if(!node){
    dp[0][0] = 0;
    dp[0][1] = Number.MAX_SAFE_INTEGER;
    dp[1][0] = 0;
    dp[1][1] = Number.MAX_SAFE_INTEGER;
    return;
  }
  if(!node.left && !node.right){
    // leaf
    dp[0][0] = Number.MAX_SAFE_INTEGER;
    dp[0][1] = 1;
    dp[1][0] = 0;
    dp[1][1] = 1;
    return;
  }

  const l = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]],
  r = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];

  getDP(node.left, l);
  getDP(node.right, r);

  dp[0][0] = Math.min(l[0][1] + r[0][0], l[0][0] + r[0][1], l[0][1] + r[0][1]);
  dp[1][0] = Math.min(l[0][0] + r[0][0], dp[0][0]);
  dp[0][1] = Math.min(l[1][0] + r[1][0], l[1][1] + r[1][0], l[1][0] + r[1][1], l[1][1] + r[1][1]) + 1;
  dp[1][1] = dp[0][1];

  return;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minCameraCover = function(root) {
  const dp = [[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];
  getDP(root, dp);
  return Math.min(dp[0][0], dp[0][1]);
};
// @lc code=end

