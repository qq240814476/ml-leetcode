/*
 * @lc app=leetcode.cn id=164 lang=cpp
 *
 * [164] 最大间距
 *
 * https://leetcode-cn.com/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (61.09%)
 * Likes:    388
 * Dislikes: 0
 * Total Accepted:    54.1K
 * Total Submissions: 88.6K
 * Testcase Example:  '[3,6,9,1]'
 *
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 
 * 如果数组元素个数小于 2，则返回 0。
 * 
 * 示例 1:
 * 
 * 输入: [3,6,9,1]
 * 输出: 3
 * 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
 * 
 * 示例 2:
 * 
 * 输入: [10]
 * 输出: 0
 * 解释: 数组元素个数小于 2，因此返回 0。
 * 
 * 说明:
 * 
 * 
 * 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 * 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    int maximumGap(vector<int>& nums) {
        if(nums.size() < 2) return 0;
        // basic number sort
        int cnt[65536] = {0};
        // count lower 16 pos
        for(auto x: nums) cnt[x & 0xffff]++;
        // prefix sum
        for(int i = 1; i< 65536; i++) cnt[i] += cnt[i-1];
        // placement
        vector<int> temp(nums.size());
        for(int i = nums.size() - 1; i>=0; i--) temp[--cnt[nums[i] % 65536]] = nums[i];
        memset(cnt, 0, sizeof(cnt));
        // count greater 16 pos|
        for(auto x: nums) cnt[(x & 0xffff0000) >> 16]++;
        // prefix sum
        for(int i=1;i< 65536; i++) cnt[i] += cnt[i-1];
        // placement
        for(int i = nums.size() -1; i>= 0; i--) nums[--cnt[(temp[i] & 0xffff0000) >> 16]] = temp[i];
        int res = 0;
        for(int i = 1; i< nums.size(); i++){
            res = max(res, nums[i] - nums[i-1]);
        }
        return res;
    }
};
// @lc code=end

