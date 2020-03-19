/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let curr = head
  let count = 0

  while(curr !== null && count < k){
    curr = curr.next
    count++
  }

  if(count === k){
    // 最终会返回下一个部分的 反转之后的 头节点
    let tail = reverseKGroup(curr, k)
    while(count > 0){
      let next = head.next
      head.next = tail
      tail = head
      head = next
      count--
    }
    head = tail
  }else{
    while(count > 0){
      let next = head.next
      head.next = curr
      curr = head
      head = next
      count--
    }
    head = curr
  }

  return head
};
// @lc code=end

