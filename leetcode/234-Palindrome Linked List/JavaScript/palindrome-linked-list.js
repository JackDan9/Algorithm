/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = '';
    let tempStr = '';
    while(head) {
      str = str + head.val;
      tempStr = head.val + tempStr;
      head = head.next;
    }
    return str === tempStr;
};