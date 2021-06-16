/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    // struct CMP{
    //     bool operator()(ListNode * a, ListNode * b){
    //         return a->val > b->val;
    //     }
    // };
    // ListNode* mergeKLists(vector<ListNode*>& lists) {
    //     // define a priority queue
    //     priority_queue<ListNode *, vector<ListNode *>, CMP> q;
    //     for(int i = 0; i < lists.size(); i++){
    //         ListNode * p = lists[i];
    //         while(p){
    //             q.push(p);
    //             p = p->next;
    //         }
    //     }
    //     // victural head node
    //     ListNode h, *p = &h;
    //     // judge empty
    //     while(!q.empty()){
    //         p->next = q.top();
    //         q.pop();
    //         p = p->next;
    //     }
    //     p->next = nullptr;
    //     return h.next;
    // }

    // // 重写仿函数, 小顶堆
    // struct CMP{
    //     bool operator()(ListNode * a, ListNode * b){
    //         return a->val > b->val;
    //     }
    // };
    // ListNode* mergeKLists(vector<ListNode*>& lists) {
    //     priority_queue<ListNode *, vector<ListNode *>, CMP> q;
    //     for(auto x: lists){
    //         ListNode *p = x;
    //         while(p){
    //             q.push(p);
    //             p = p->next;
    //         }
    //     }
    //     // all the listnode in ascending order
    //     // then we should make  a new linked-list to store them
    //     ListNode h, *p = &h;
    //     while(!q.empty()){
    //         p->next = q.top();
    //         q.pop();
    //         p = p->next;
    //     }
    //     // tail point nullptr
    //     p->next = nullptr;
    //     return h.next;
    // }

    struct CMP{
        bool operator()(ListNode *a, ListNode *b){
            return a->val > b -> val;
        }
    };
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode *, vector<ListNode *>, CMP> q;
        for(auto x: lists){
            ListNode *p = x;
            while(p){
                q.push(p);
                p = p -> next;
            }
        }
        ListNode h, *p = &h;
        while(!q.empty()){
            p->next = q.top();
            q.pop();
            p = p->next;
        }
        p->next = nullptr;
        return h.next;
    }
};
// @lc code=end

