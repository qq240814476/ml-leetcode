/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 class Heap{
  data = [];
  compare = null;
  constructor(compare){
    this.compare = compare;
  }
  push(obj){
      this.data.push(obj);
      let idx = this.size() - 1;
      // divided by 除以
      while(idx && this.compare(this.data[idx], this.data[Math.floor((idx - 1) / 2)])){
          const temp = this.data[idx];
          this.data[idx] = this.data[Math.floor((idx - 1) / 2)];
          this.data[Math.floor((idx - 1) / 2)] = temp;
          idx = Math.floor((idx - 1) / 2);
      }
  }
  pop(){
      const top = this.data[0];
      this.data[0] = this.data[this.size() - 1];
      this.data.length -= 1;
      // if(this.data.length == 0) this.data = [];
      let pIdx = 0,
          lIdx = 2 * pIdx + 1,
          rIdx = 2 * pIdx + 2;
      while(lIdx <= this.size() -1){
          // 可能是极大也可能是极小
          let extremumIdx = pIdx;
          if(this.compare(this.data[lIdx], this.data[extremumIdx])) extremumIdx = lIdx;
          if(rIdx <= this.size() -1 && this.compare(this.data[rIdx], this.data[extremumIdx]))
              extremumIdx = rIdx;
          if(extremumIdx == pIdx) break;
          const temp = this.data[pIdx];
          this.data[pIdx] = this.data[extremumIdx];
          this.data[extremumIdx] = temp;
          pIdx = extremumIdx;
          lIdx = 2 * pIdx + 1,
          rIdx = 2 * pIdx + 2;
      }
      return top;
  }
  size(){
      return this.data.length;
  }
  top(){
      return this.data[0];
  }
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 小顶
var mergeKLists = function(lists) {
    const minHeap = new Heap((a,b) => (a.val < b.val))
    for(let list of lists){
        while(list){
            minHeap.push(list);
            const temp = list.next;
            list.next = null;
            list = temp;
        }
    }
    let head = minHeap.pop() || null, curr = head;
    while(minHeap.size() > 0){
        curr.next = minHeap.pop();
        curr = curr.next;
    }
    return head
};
// @lc code=end

