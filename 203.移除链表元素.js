/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (43.84%)
 * Likes:    339
 * Dislikes: 0
 * Total Accepted:    57.4K
 * Total Submissions: 130.9K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 空节点
  const vn = {
    val: null,
    next: head
  }
  let newh = vn
  while(newh){
    if(!newh.next || newh.next.val !== val){
      newh = newh.next
    }else{
      let n = newh.next
      newh.next = n.next
      n.next = null
    }
  }
  return vn.next
};
// @lc code=end

