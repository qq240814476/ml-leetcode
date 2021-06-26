/*
 * @lc app=leetcode.cn id=56 lang=cpp
 *
 * [56] 合并区间
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        vector<vector<int>> arr;
        vector<int> t(2);

        for(auto x: intervals){
            t[0] = x[0];
            t[1] = 1;
            arr.push_back(t);
            t[0] = x[1];
            t[1] = -1;
            arr.push_back(t);
        }

        sort(arr.begin(), arr.end(), 
            [](const vector<int> &a, const vector<int> &b) -> bool {
                if(a[0] - b[0]) return a[0] < b[0];
                return a[1] > b[1];
            }
        );
        
        int begin=-1, sum =0;
        vector<vector<int>> res;

        for(auto x: arr){
            if(begin == -1) begin = x[0];
            sum += x[1];
            if(!sum){
                t[0] = begin;
                t[1] = x[0];
                res.push_back(t);
                begin = -1;
            }
        }
        return res;
    }
};
// @lc code=end

