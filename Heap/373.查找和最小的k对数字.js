/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
class MaxHeap{
  data = [];
  turnUp(idx){
      let pIdx = Math.floor((idx - 1) /2);
      while(idx && this.data[idx][0] + this.data[idx][1] > this.data[pIdx][0] + this.data[pIdx][1]){
          const temp = this.data[pIdx];
          this.data[pIdx] = this.data[idx];
          this.data[idx] = temp;
          idx = pIdx;
          pIdx = Math.floor((idx - 1) /2);
      }
  }
  turnDown(idx){
      // multiply maoteplai 乘法
      let lIdx = 2 * idx + 1;
      let rIdx = 2 * idx + 2;
      while(lIdx <= this.data.length - 1){
          let minIdx = idx;
          if(this.data[lIdx][0] + this.data[lIdx][1]  > this.data[minIdx][0] + this.data[minIdx][1]) minIdx = lIdx;
          if(rIdx <= this.data.length - 1 && this.data[rIdx][0] + this.data[rIdx][1] > this.data[minIdx][0] + this.data[minIdx][1])
              minIdx = rIdx;
          if(minIdx == idx) break;
          const temp = this.data[idx];
          this.data[idx] = this.data[minIdx];
          this.data[minIdx] = temp;
          idx = minIdx;
          lIdx = 2 * idx + 1;
          rIdx = 2 * idx + 2;
      }
  }
  push(arr){
      this.data.push(arr);
      // 减法 minus
      this.turnUp(this.data.length - 1);
  }
  pop(){
      const top = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this.data.length -= 1;
      this.turnDown(0);
      return top;
  }
  top(){
      return this.data.length === 0 ? Number.MAX_SAFE_INTEGER : this.data[0][0] + this.data[0][1];
  }
  size(){
      return this.data.length;
  }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const maxHeap = new MaxHeap();
    for(const num1 of nums1){
        for(const num2 of nums2){
            if(maxHeap.size() < k || num1 + num2 < maxHeap.top()){
               maxHeap.push([num1, num2]);
               if(maxHeap.data.length > k) maxHeap.pop();
            } else break;
        }
    }
    return maxHeap.data;
};
// @lc code=end

