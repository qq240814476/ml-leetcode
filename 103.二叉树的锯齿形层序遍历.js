/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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

var dfs = (root, index, res) => {
  if(!root) return;
  if(!res[index]) res.push([]);
  res[index].push(root.val);
  dfs(root.left, index+1, res);
  dfs(root.right, index+1, res);
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const res = [];
  dfs(root, 0, res);
  for(let i =0; i<res.length;i++){
    if(i % 2 == 1){
      res[i].reverse();
    }
  }
  return res;
};
// @lc code=end

