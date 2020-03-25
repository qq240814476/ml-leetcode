/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(lists.length === 0) return null
  let head = {
    val: Number.MIN_VALUE,
    next: null
  }
  for(let i = 0; i<lists.length; i++){
    if(head)
  }
  return head.next
};
// @lc code=end

