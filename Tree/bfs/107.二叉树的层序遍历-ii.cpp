/*
 * @lc app=leetcode.cn id=107 lang=cpp
 *
 * [107] 二叉树的层序遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Medium (68.94%)
 * Likes:    440
 * Dislikes: 0
 * Total Accepted:    143.1K
 * Total Submissions: 207.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层序遍历为：
 * 
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        // bfs + count
        // need queue to pop_front push_back
        vector<vector<int>> res;
        vector<int> levelArr;
        if(!root){
            return res;
        }
        queue<TreeNode*> nodeArr;
        nodeArr.push(root);
        int currCount = 1;
        int nextCount = 0;
        while(nodeArr.size()){
            TreeNode* node = nodeArr.front();
            nodeArr.pop();
            levelArr.push_back(node->val);
            if(node->left){
                nodeArr.push(node->left);
                nextCount++;
            }
            if(node->right){
                nodeArr.push(node->right);
                nextCount++;
            }
            if(!--currCount){
               // clone vector use constructor
               vector<int> arr(levelArr);
               res.push_back(arr);
               levelArr.clear();
               currCount = nextCount;
               nextCount = 0;
            }
        }
        reverse(res.begin(), res.end());
        return res;
    }
};
// @lc code=end

