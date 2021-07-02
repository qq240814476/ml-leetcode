/*
 * @lc app=leetcode.cn id=491 lang=cpp
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (55.04%)
 * Likes:    298
 * Dislikes: 0
 * Total Accepted:    39.5K
 * Total Submissions: 71.8K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是 2 。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：[4, 6, 7, 7]
 * 输出：[[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7],
 * [4,7,7]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定数组的长度不会超过15。
 * 数组中的整数范围是 [-100,100]。
 * 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    typedef vector<int> vi;
    void getRes(vi &nums, int p, vi temp, vector<vi> &res){
        temp.push_back(0);
        unordered_map<int, int> m;
        for(int i = p; i< nums.size(); i++){
            if(m.find(nums[i]) != m.end()) continue;
            if(temp.size() == 1 || temp[temp.size() -2] <= nums[i]){
                temp[temp.size()-1] = nums[i];
                if(temp.size() > 1) res.push_back(temp);
                m[nums[i]] = 1;
                getRes(nums, i+1, temp, res);
            }
        }
    }
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        vector<vi> res;
        getRes(nums, 0, vi(), res);
        return res;
    }
};
// @lc code=end

