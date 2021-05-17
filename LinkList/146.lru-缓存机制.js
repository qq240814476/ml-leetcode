/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class DoubleLinkNode {
  prev = null;
  next = null;
  key = null;
  val = null;
  constructor(key, val){
    this.key = key;
    this.val = val;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity || 1;
  this.size = 0;
  this.head = new DoubleLinkNode(null, null);
  this.tail = new DoubleLinkNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  // 存储 key: node
  this.hash = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.hash[key]){
    const node = this.hash[key];
    this.moveToHead(node);
    return node.val;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(!this.hash[key]){
    const node = new DoubleLinkNode(key, value);
    this.insertAfterHead(node);
    this.hash[key] = node;
    if(++this.size > this.capacity){
      const tailNode = this.tail.prev;
      this.removeNode(tailNode);
      delete this.hash[tailNode.key];
      this.size--;
    }
  } else {
    const node = this.hash[key];
    node.val = value;
    this.moveToHead(node);
  }
};

/** 
 * @param {DoubleLinkNode} node 
 * @return {void}
 */
 LRUCache.prototype.moveToHead = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.insertAfterHead(node);
};

/** 
 * @param {DoubleLinkNode} node 
 * @return {void}
 */
 LRUCache.prototype.insertAfterHead = function(node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

/** 
 * @param {DoubleLinkNode} node 
 * @return {void}
 */
 LRUCache.prototype.removeNode = function(node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.prev = null;
  node.next = null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

