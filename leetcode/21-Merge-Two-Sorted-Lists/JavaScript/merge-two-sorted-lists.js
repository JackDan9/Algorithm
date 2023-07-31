/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let t1 = list1;
  let t2 = list2;

  let t3 = new ListNode();
  let cur3 = t3;

  while(t1 && t2) {
    if (t1.val <= t2.val) {
      cur3.next = t1;
      t1 = t1.next;
    } else {
      cur3.next = t2;
      t2 = t2.next;
    }
    cur3 = cur3.next;
  }

  cur3.next = t1 === null ? t1 : t2;

  return t3.next;
};

