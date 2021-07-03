/*
 * @lc app=leetcode.cn id=69 lang=cpp
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (39.27%)
 * Likes:    707
 * Dislikes: 0
 * Total Accepted:    333.3K
 * Total Submissions: 848.2K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    int mySqrt(int x) {
        if(x == 1) return 1;
        int min =0, max = x / 2;
        long long mid;
        while(min <= max){
            mid = min + (max-min >> 1);
            if(mid * mid == x) return mid;
            if(mid * mid < x){
                min = mid+1;
            } else {
                max = mid-1;
            }
        }
        if(mid * mid > x) return mid - 1;
        return mid;
    }
};
// @lc code=end

