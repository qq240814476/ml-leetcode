/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//! 二叉搜索树, 中序遍历, 得到从小到大的排序
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
/**
 * 中序遍历
 */
// var dfs = (root, arr) => {
//     if(!root) return null;
//     dfs(root.left, arr);
//     arr.push(root.val);
//     dfs(root.right, arr);
// }
// var kthLargest = function(root, k) {
    // var arr = [];
    // dfs(root, arr);
    // return arr[arr.length - k];
// };

// var dfs = (node, arr) => {
//     if(!node) return;
//     dfs(node.left, arr);
//     arr.push(node.val);
//     dfs(node.right, arr);
// }

// var kthLargest = function(root, k) {
//     var arr = [];
//     dfs(root, arr);
//     return arr[arr.length - k];
// };
var dfs = (node, arr) => {
  if(!node) return;
  dfs(node.left, arr);
  arr.push(node.val);
  dfs(node.right, arr);
}
var kthLargest = function(root, k) {
  var arr = [];
  dfs(root, arr);
  return arr[arr.length - 1 - (k - 1)];
};