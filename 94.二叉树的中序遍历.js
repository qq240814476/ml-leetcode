/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    const stack = []
    const res = []
    if(!root) return res
    while(root){
      if(root.left){
        stack.push(root)
        // 剪枝，省去重复运算
        const left = root.left
        root.left = null
        root = left
      }else{
        res.push(root.val)
        root = root.right || stack.pop()
      }
    }
    return res
};
// @lc code=end

