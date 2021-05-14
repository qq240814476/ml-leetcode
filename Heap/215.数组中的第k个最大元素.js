/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class GreaterHeap{
  data = [];
  turnUp(idx){
      let pIdx = Math.floor((idx - 1) /2);
      while(idx && this.data[idx] < this.data[pIdx]){
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
          if(this.data[lIdx] < this.data[minIdx]) minIdx = lIdx;
          if(rIdx <= this.data.length - 1 && this.data[rIdx] < this.data[minIdx])
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
  push(num){
      this.data.push(num);
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
}
/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var findKthLargest = function(nums, k) {
  const greater = new GreaterHeap();
  for(const num of nums){
      greater.push(num);
      if(greater.data.length > k) greater.pop();
  }
  return greater.pop()
};
// @lc code=end

