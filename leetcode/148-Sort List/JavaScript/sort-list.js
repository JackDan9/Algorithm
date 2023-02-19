/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) {
    return [];
  }

  let slow = head;
  let fast = head;
  let pre = head;

  while (fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  };

  pre.next = null;
  return merge(sortList(head), sortList(slow));
};

var merge = function(L1, L2) {
  if(!L1) return L2;
  if(!L2) return L1;

  if(L1.val < L2.val) {
    L1.next = merge(L1.next, L2);
    return L1;
  } else {
    L2.next = merge(L1, L2.next);
    return L2;
  }
};