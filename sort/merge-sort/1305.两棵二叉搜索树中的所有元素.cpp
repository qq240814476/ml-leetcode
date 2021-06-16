/*
 * @lc app=leetcode.cn id=1305 lang=cpp
 *
 * [1305] 两棵二叉搜索树中的所有元素
 *
 * https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/description/
 *
 * algorithms
 * Medium (74.59%)
 * Likes:    59
 * Dislikes: 0
 * Total Accepted:    13.8K
 * Total Submissions: 18.5K
 * Testcase Example:  '[2,1,4]\r\n[1,0,3]\r'
 *
 * 给你 root1 和 root2 这两棵二叉搜索树。
 * 
 * 请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：root1 = [2,1,4], root2 = [1,0,3]
 * 输出：[0,1,1,2,3,4]
 * 
 * 
 * 示例 2：
 * 
 * 输入：root1 = [0,-10,10], root2 = [5,1,7,0,2]
 * 输出：[-10,0,0,1,2,5,7,10]
 * 
 * 
 * 示例 3：
 * 
 * 输入：root1 = [], root2 = [5,1,7,0,2]
 * 输出：[0,1,2,5,7]
 * 
 * 
 * 示例 4：
 * 
 * 输入：root1 = [0,-10,10], root2 = []
 * 输出：[-10,0,10]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 
 * 输入：root1 = [1,null,8], root2 = [8,1]
 * 输出：[1,1,8,8]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每棵树最多有 5000 个节点。
 * 每个节点的值在 [-10^5, 10^5] 之间。
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
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {
        vector<int> a1, a2;
        dfs(root1, a1);
        dfs(root2, a2);
        return merge_sort(a1, a2);
    }
    // use & transfer vector not new vector
    void dfs(TreeNode *r, vector<int> &a){
        if(!r) return ;
        // because binary search tree, use mid search
        dfs(r->left, a);
        a.push_back(r->val);
        dfs(r->right, a);
        return ;
    }
    vector<int> merge_sort(vector<int> r1, vector<int> r2){
        vector<int> res;
        int i = 0, j=0;
        while(i < r1.size() || j < r2.size()){
            if((j == r2.size()) || (i < r1.size() && r1[i] < r2[j])){
                res.push_back(r1[i++]);
            } else {
                res.push_back(r2[j++]);
            }
        }
        return res;
    }
};class Solution {
public:
    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {
        vector<int> a1, a2;
        dfs(root1, a1);
        dfs(root2, a2);
        return merge_sort(root1, root2);
    }
    void dfs(TreeNode *r, vector<int> a){
        if(!r) return ;
        // because binary search tree, use mid search
        dfs(r->left, a);
        a.push_back(r->val);
        dfs(r->right, a);
        return ;
    }
    vector<int> merge_sort(vector<int> r1, vector<int> r2){
        vector<int> res;
        int i = 0, j=0;
        while(i < r1.size() || j < r2.size()){
            if((j == r2.size()) || (i < r1.size() && r1[i] < r2[j])){
                res.push_back(r1[i++]);
            } else {
                res.push_back(r2[j++]);
            }
        }
        return res;
    }
};
// @lc code=end

