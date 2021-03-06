/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (66.84%)
 * Likes:    759
 * Dislikes: 0
 * Total Accepted:    152.9K
 * Total Submissions: 228.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
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
 * @return {ListNode}
 */
// 迭代
var reverseList = function(head) {
  let pre = null
  let cur = head
  while(cur){
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre

  // 递归
  // if (head == null || head.next == null) return head;
  // let p = reverseList(head.next);
  // head.next.next = head;
  // head.next = null;
  // return p;
};
// @lc code=end

