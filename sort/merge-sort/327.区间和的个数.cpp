/*
 * @lc app=leetcode.cn id=327 lang=cpp
 *
 * [327] 区间和的个数
 *
 * https://leetcode-cn.com/problems/count-of-range-sum/description/
 *
 * algorithms
 * Hard (42.73%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    22.9K
 * Total Submissions: 53.5K
 * Testcase Example:  '[-2,5,-1]\n-2\n2'
 *
 * 给你一个整数数组 nums 以及两个整数 lower 和 upper 。求数组中，值位于范围 [lower, upper] （包含 lower 和
 * upper）之内的 区间和的个数 。
 * 
 * 区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-2,5,-1], lower = -2, upper = 2
 * 输出：3
 * 解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0], lower = 0, upper = 0
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -2^31 
 * -10^5 
 * 题目数据保证答案是一个 32 位 的整数
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    // int res;
    // int low, up;
    // int countRangeSum(vector<int>& nums, int lower, int upper) {
    //     // rangeSum[1,2] = prevSum[2] - prevSum[1-1]
    //     // so we should get prevSum first
    //     vector<long long> ps;
    //     res = 0;
    //     low = lower;
    //     up = upper;
    //     ps.push_back(0);
    //     for(int i=0;i<nums.size();i++){
    //         ps.push_back(nums[i] + ps[i]);
    //     }
    //     // then we use merge thought , lower <= prevSum[j] - prevSum[i] <= upper
    //     // use merge_sort
    //     merge_sort(ps, 0, ps.size()-1);
    //     return res;
    // }
    // void merge_sort(vector<long long> &a, int l, int r){
    //     if(l >= r) return;
    //     // split
    //     int mid = (l+r) >> 1;
    //     merge_sort(a, l, mid);
    //     merge_sort(a, mid + 1, r);

    //     // merge
    //     vector<long long> t;
    //     int lp = l, rp = mid+1;
    //     // double point
    //     int k1 = lp, k2 = lp;
    //     for(int i = rp; i<= r; i++){
    //         long long x = a[i] - up;
    //         long long y = a[i] - low;
    //         // k1, k2 should include a[k1] <= [x, y] < a[k2]
    //         while(k1 <= mid && a[k1] < x) k1++;
    //         while(k2 <= mid && a[k2] <= y) k2++;
    //         res += k2-k1;
    //     }
    //     while(lp <= mid || rp <= r){
    //         if((rp > r) || (lp <= mid && a[lp] < a[rp])){
    //             t.push_back(a[lp++]);
    //         } else {
    //             t.push_back(a[rp++]);
    //         }
    //     }
    //     for(int i = l; i<=r; i++) a[i] = t[i - l];
    //     return ;
    // }
    int res, low, up;
    int countRangeSum(vector<int>& nums, int lower, int upper) {
        // calculate prevSum
        vector<long long> ps;
        ps.push_back(0);
        for(int i=0;i<nums.size();i++){
            ps.push_back(nums[i] + ps[i]);
        }
        res = 0;
        low = lower;
        up = upper;
        merge_sort(ps, 0, nums.size());
        return res;
    }
    // &a
    void merge_sort(vector<long long> &a, int l, int r){
        if(l >= r) return ;
        // split
        int mid = (l+r) >> 1;
        merge_sort(a, l, mid);
        merge_sort(a, mid + 1, r);

        // plus plus res
        int k1 = l, k2 = l;
        for(int i = mid+1;i<=r; i++){
            int x = a[i] - up;
            int y = a[i] - low;
            while(k1 <=mid && a[k1] < x) k1++;
            while(k2 < mid && a[k2] <= y) k2++;
            res += k2 - k1;
        }

        //merge 
        vector<long long> t;
        int lp = l, rp = mid + 1;
        while(lp <= mid || rp <= r){
            if((rp == r) || (lp <= mid && a[lp] < a[rp])){
                t.push_back(a[lp++]);
            } else {
                t.push_back(a[rp++]);
            }
        }
        for(int i = l; i<=r; i++) a[i] = t[i - l];
        return ;
    }
};
// @lc code=end

