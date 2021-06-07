/*
 * @lc app=leetcode.cn id=75 lang=cpp
 *
 * [75] 颜色分类
 */

// @lc code=start
class Solution {
public:
    void partision(vector<int> &arr, int l, int r, int pivot){
        if(l >= r) return;
        int x = l, y = r, i = l;
        while(i <= y){
            if(arr[i] == pivot) i++;
            else if(arr[i] < pivot){
                swap(arr[x++], arr[i++]);
            } else if(arr[i] > pivot){
                swap(arr[y--], arr[i]);
            }
        }
    }
    vector<int> sortColors(vector<int>& nums) {
        partision(nums, 0, nums.size() - 1, 1);
        return nums;
    }
};
// @lc code=end

