/*
 * @lc app=leetcode.cn id=1302 lang=cpp
 *
 * [1302] 层数最深叶子节点的和
 *
 * https://leetcode-cn.com/problems/deepest-leaves-sum/description/
 *
 * algorithms
 * Medium (81.45%)
 * Likes:    57
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 21.6K
 * Testcase Example:  '[1,2,3,4,5,null,6,7,null,null,null,null,8]'
 *
 * 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 * 输出：15
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * 输出：19
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 10^4] 之间。
 * 1 
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
    void dfs(TreeNode* n, int k, int &maxk, int &res){
        if(!n) return;
        if(k > maxk){
            maxk = k;
            res = 0;
        }
        if(k == maxk){
            res += n->val;
        }
        dfs(n->left, k+1, maxk, res);
        dfs(n->right, k+1, maxk, res);
        return;
    }
    int deepestLeavesSum(TreeNode* root) {
        int maxk = 0, res=0;
        dfs(root, 1, maxk, res);
        return res;
    }
};
// @lc code=end

