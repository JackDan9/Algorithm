/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = new ListNode();
  while(head !== null) {
    let pnext = new ListNode();
    pnext = head.next;
    head.next = prev;
    prev = head;
    head = pnext;
  }
  return prev;
}

var addTwoNumbers = function(l1, l2) {
  let arr1 = [];
  let arr2 = [];

  while(l1 !== null) {
    arr1.push(l1.val);
    l1 = l1.next;
  }

  while(l2 !== null) {
    arr2.push(l2.val);
    l2 = l2.next;
  }

  // let maxLength = arr1.length >= arr2.length ? arr1.length : arr2.length;

  // arr1 = arr1.padstart(maxLength, 0);
  // arr2 = arr2.padstart(maxLength, 0);

  let len1 = arr1.length - 1;
  let len2 = arr2.length - 1;

  let flag = 0;
  let sum = 0;

  let pre = new ListNode(0);
  // let cur = pre;

  while(len1 >= 0 || len2 >= 0) {
    sum = (len1 >= 0 ? arr1[len1--] : 0) + (len2 >= 0 ? arr2[len2--] : 0) + flag;
    flag = Math.floor(sum / 10);
    sum = (sum % 10);
    let cur = new ListNode(sum);
    cur.next = pre.next;
    pre.next = cur;
  }

  if(flag === 1) {
    let cur = new ListNode(1);
    cur.next = pre.next;
    pre.next = cur;
  }

  // for(let i = maxLength - 1;  i >= 0; i--) {
  //   sum = arr1[i] + arr2[i];
  //   flag = Math.floor(sum / 10);
  //   sum = (sum % 10) + flag;
  //   let cur = new ListNode(sum);
  //   cur.next = pre.next;
  //   pre.next = cur;
  // }

  // if(flag === 1) {
  //   let cur = new ListNode(1);
  //   cur.next = pre.next;
  //   pre.next = cur;
  // }

  return pre.next;
};