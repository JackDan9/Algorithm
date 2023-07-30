/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head || !n) {
    return head;
  }

  let temp = new ListNode(0, head);
  let cur = temp;
  let temp1 = new ListNode(0, head);
  let cur1 = temp1;

  let len = 0;
  let index = 0;


  while (cur.next) {
    cur = cur.next;
    len = len + 1;
  }

  while (cur1.next) {
    if ((index + 1 + n) === len) {
      if (cur1.next.next) {
        cur1.next = cur1.next.next;
      } else {
        cur1.next = null;
      }
    } else {
      cur1 = cur1.next;
    }
    index = index + 1;
  }

  return temp1.next;
}