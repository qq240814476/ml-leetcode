/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
// 小顶堆
class GreaterHeap{
  data = [];
  // 向上调整
  turnup(idx){
      let pIndex = Math.floor((idx - 1) / 2);
      // 等于 0 时 没有可以比较的父节点了, 如果小于说明在一个正确的位置上了
      while(idx > 0 && this.data[idx] < this.data[pIndex]){
          const temp = this.data[pIndex];
          this.data[pIndex] = this.data[idx];
          this.data[idx] = temp;
          idx = pIndex;
          pIndex = Math.floor((idx - 1) / 2)
      }
  }
  // 向下调整
  turnDown(pIndex){
      // 起始为0的完全二叉树, 父节点如果是i, 左子节点 2i+1, 右子节点 2i+2
      // 如果起时为 1, 父节点为 i, 左子节点 2i, 右子节点 2i+1
      let lIndex = 2 * pIndex + 1;
      let rIndex = 2 * pIndex + 2;
      while(lIndex <= this.data.length - 1){
          // store min node index
          let minIndex = pIndex;
          if(this.data[lIndex] < this.data[minIndex]) minIndex = lIndex;
          if(rIndex <= this.data.length - 1 && this.data[rIndex] < this.data[minIndex])
              minIndex = rIndex;
          if(minIndex == pIndex) break;
          const temp = this.data[pIndex];
          this.data[pIndex] = this.data[minIndex];
          this.data[minIndex] = temp;
          pIndex = minIndex;
          lIndex = 2 * pIndex + 1;
          rIndex = 2 * pIndex + 2;
      }
  }
  push(num){
      this.data.push(num);
      this.turnup(this.data.length - 1)
  }
  shift(){
      const top = this.data[0];
      // 将最后一个元素, 放到首位, 数组长度 - 1
      // this.data.unshift(this.data.pop());
      this.data[0] = this.data[this.data.length - 1];
      this.data.length -= 1;
      this.turnDown(0);
      // console.log(this.data);
      return top;
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.greater = new GreaterHeap();
    this.k = k;
    for(const num of nums){
        this.greater.push(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.greater.push(val);
    while(this.greater.data.length > this.k){
        this.greater.shift();
    }
    return this.greater.data[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

