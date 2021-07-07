/*
 * @lc app=leetcode.cn id=1658 lang=cpp
 *
 * [1658] 将 x 减到 0 的最小操作数
 *
 * https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/description/
 *
 * algorithms
 * Medium (29.04%)
 * Likes:    66
 * Dislikes: 0
 * Total Accepted:    7.4K
 * Total Submissions: 25.6K
 * Testcase Example:  '[1,1,4,2,3]\n5'
 *
 * 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要
 * 修改 数组以供接下来的操作使用。
 * 
 * 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,4,2,3], x = 5
 * 输出：2
 * 解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,6,7,8,9], x = 4
 * 输出：-1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [3,2,20,1,1,3], x = 10
 * 输出：5
 * 解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    int binary_search(vector<int> &arr, int x){
        int min = 0, max = arr.size() -1, mid;
        while(min <= max){
            mid = (min + max) >> 1;
            if(arr[mid] == x) return mid;
            if(arr[mid] < x) min = mid + 1;
            else max = mid -1;
        }
        return -1;
    }
    int minOperations(vector<int>& nums, int x) {
        int ans = -1;
        int len = nums.size();
        vector<int> suml(len + 1, 0);
        vector<int> sumr(len + 1, 0);
        for(int i = 0; i< len; i++){
            suml[i + 1] = nums[i] + suml[i];
        }
        for(int i = 0; i< len; i++){
            sumr[i + 1] = nums[len - 1 - i] + sumr[i];
        }
        // for suml, find x subtract suml[i] equal 
        int j = -1;
        for(int i = 0; i< len+1; i++){
            // cout << sumr[i] << endl;
            j = binary_search(sumr, x - suml[i]);
            // cout << j << endl;
            if(j == -1 || i + j > len) continue;
            if(ans == -1 || ans > i + j) ans = i+j;
        }
        return ans;
    }
};
// @lc code=end

