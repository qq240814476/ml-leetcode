/*
 * @lc app=leetcode.cn id=4 lang=cpp
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (40.42%)
 * Likes:    4239
 * Dislikes: 0
 * Total Accepted:    445.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums1 = [0,0], nums2 = [0,0]
 * 输出：0.00000
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums1 = [], nums2 = [1]
 * 输出：1.00000
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums1 = [2], nums2 = []
 * 输出：2.00000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 
 * 0 
 * 1 
 * -10^6 
 * 
 * 
 * 
 * 
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 * 
 */

// @lc code=start
class Solution {
public:
    double findK(vector<int> &a1, vector<int> &a2, int i, int j, int k){
        if(a1.size() == i) return a2[j+k-1];
        if(a2.size() == j) return a1[i+k-1];
        if(k == 1) return a1[i] < a2[j] ? a1[i] : a2[j];
        // dichotomy 1/2 problem size
        int a = min(k /2, (int)a1.size() - i);
        int b = min(k - a, (int)a2.size() - j);
        // make sure a + b = k
        a = k - b;
        if(a1[i+a-1] <= a2[j+b-1]) return findK(a1, a2, i+a, j, k-a);
        return findK(a1,a2,i, j+b, k-b);
    }
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int s1 = nums1.size(), s2 = nums2.size(), k = (s1 + s2 + 1) >> 1;
        double a = findK(nums1, nums2, 0, 0, k);
        if((s1+s2) % 2) return a;
        double b = findK(nums1, nums2, 0, 0, k+1);
        return (a+b) / 2.0;
    }
};
// @lc code=end

