/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
  let [ a,b ] = [p.val,q.val].sort()
  let res = root
  // 迭代比较root.val,一大一小终止
  while(root){
    if(root.val < a){
      root = root.right
    }else if(root.val > b){
      root = root.left
    }else{
      res = root
      break
    }
  }
  return res
};
// @lc code=end

