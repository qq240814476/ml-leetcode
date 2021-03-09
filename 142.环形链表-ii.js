/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (48.10%)
 * Likes:    352
 * Dislikes: 0
 * Total Accepted:    49.3K
 * Total Submissions: 102.4K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 说明：不允许修改给定的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 你是否可以不用额外空间解决此题？
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

// 先判断是否有环， 快慢指针
// 然后将快指针 放置到头部， 因为慢指针此时还距离环的起点 a 距离
// 让快指针1步1步走，直到快慢相遇，记录步数
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if(!head || !head.next) return null;
  let p = head;
  let q = head;
  // 先往后走， 再判断， 要不然都是 head 直接命中相等了
  do{
    p = p.next;
    q = q.next.next;
  }while(p!==q && q && q.next)
  if(!q || !q.next) return null;
  q = head;
  while(p!==q){
    p = p.next;
    q = q.next;
  }
  return q;
};
// @lc code=end

