/*
 * @lc app=leetcode.cn id=315 lang=cpp
 *
 * [315] 计算右侧小于当前元素的个数
 *
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/description/
 *
 * algorithms
 * Hard (41.90%)
 * Likes:    597
 * Dislikes: 0
 * Total Accepted:    46.2K
 * Total Submissions: 110.2K
 * Testcase Example:  '[5,2,6,1]'
 *
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于
 * nums[i] 的元素的数量。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums = [5,2,6,1]
 * 输出：[2,1,1,0] 
 * 解释：
 * 5 的右侧有 2 个更小的元素 (2 和 1)
 * 2 的右侧仅有 1 个更小的元素 (1)
 * 6 的右侧有 1 个更小的元素 (1)
 * 1 的右侧有 0 个更小的元素
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 */

// @lc code=start
class Solution {
public:
    struct Data{
        Data(int val, int pos): val(val), pos(pos) {}
        bool operator<(Data &a){
            return val < a.val;
        }
        int val, pos;
    };
    vector<int> countSmaller(vector<int>& nums) {
        // split
        // compare
        // merge
        // how to init n 0 ?
        vector<Data> data;
        vector<int> res(nums.size(), 0);
        int i = 0;
        for(auto x: nums){
            data.push_back(Data(x, i++));
        }
        merge_sort(data, 0, nums.size()-1, res);

        return res;
    }
    void merge_sort(vector<Data> &a, int l, int r, vector<int> &res){
        if(l >= r) return ;
        int mid = (l+r) >> 1;
        int lp = l, rp = mid+1;
        merge_sort(a, l, mid, res);
        merge_sort(a, mid+1, r, res);

        // compare
        int p = rp;
        for(int i = l; i<=mid; i++){
            while(p<=r && a[p] < a[i]) p++;
            res[a[i].pos] += p - rp;
        }

        //merge
        vector<Data> t;
        while(lp <= mid || rp <= r){
            if((rp > r) || (lp <= mid) && a[lp] < a[rp]){
                t.push_back(a[lp++]);
            } else {
                t.push_back(a[rp++]);
            }
        }
        for(int i = l; i<=r; i++) a[i] = t[i - l];
        return;
    }
};
// @lc code=end

