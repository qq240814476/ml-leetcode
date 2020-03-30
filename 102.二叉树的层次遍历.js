/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// bfs
let arr
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    arr = []
    bfs(root)
    return arr
};
function bfs(root){
    if(!root) return
    let stack = [root],
        len = 1,  // 用于记录每层多少个node
        path = [] //临时数组
    
    while(stack.length !== 0){
        let node = stack.shift()
        len--

        path.push(node.val)
        // 如果不是null添加
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
        
        if(len === 0){
            // 本层结束了
            arr.push([...path])
            path = []
            len = stack.length
        }
    }
}
// @lc code=end

