/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
//! 此题可当作完全二叉树来看待, 完全二叉树特征:
//! 父节点为i, 左子节点为 2i, 右子节点 2i - 1
//! 广搜+index记录序号
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var widthOfBinaryTree = function(root) {
//     const queue = [{node: root, index: 0}];
//     let res = 0;
//     while(queue.length > 0){
//         const len = queue.length;
//         const left = queue[0].index;
//         let right = queue[0].index;
//         for(let i = 0; i < len; i++){
//             const { node, index } = queue.shift();
//             right = index;
//             if(node.left) queue.push({node: node.left, index: 2 * (index - left)});
//             if(node.right) queue.push({node: node.right, index: 2 * (index - left) + 1});
//         }
//         res = Math.max(res, right - left + 1);
//     }
//     return res;
// };
// var widthOfBinaryTree = function(root) {
//     const queue = [{node: root, index: 0}];
//     let width = 0;
//     while(queue.length > 0){
//         const len = queue.length;
//         const left = queue[0].index;
//         let right = queue[0].index;
//         for(let i =0;i<len;i++){
//             const {node, index} = queue.shift();
//             right = index;
//             if(node.left) queue.push({node: node.left, index: 2 * (index - left)})
//             if(node.right) queue.push({node: node.right, index: 2 * (index - left) + 1})
//         }
//         width = Math.max(width, right - left + 1)
//     }
//     return width;
// };
var widthOfBinaryTree = function(root) {
  const queue = [{node: root, index: 0}]
  let width = 0;
  while(queue.length > 0){
      const len = queue.length;
      const left = queue[0].index;
      let right = queue[0].index;
      for(let i = 0; i < len; i++){
          const { node, index } = queue.shift();
          right = index;
          if(node.left) queue.push({node: node.left, index: 2 * (index - left)});
          if(node.right) queue.push({node: node.right, index: 2 * (index - left) + 1});
      }
      width = Math.max(width, right - left + 1)
  }
  return width;
};
// @lc code=end

