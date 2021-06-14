class Solution {
public:
    int ans;
    int reversePairs(vector<int>& nums) {
        ans = 0;
        merge_sort(nums, 0, nums.size() - 1);
        return ans;
    }
    void merge_sort(vector<int> &arr, int l, int r){
        if(l >= r) return;
        int mid = (r+l) >> 1;
        merge_sort(arr, l, mid);
        merge_sort(arr, mid+1, r);
        
        int x = l, y = mid + 1;
        vector<int> res;
        
        while(x <= mid || y <= r){
            if(y > r || (x <= mid && arr[x] <= arr[y])){
                res.push_back(arr[x++]);
            } else {
                // if(mid >= x){
                // 只需要将后面这部分的加起来就可以, 因为对顺序要求
                // 逆序对 必须要求 下标大的 值小 才能算
                ans += mid - x + 1;
                // }
                res.push_back(arr[y++]);
            }
        }

        for(int i = l; i <= r; i++){
            arr[i] = res[i - l];
        }
        return ;
    }
};