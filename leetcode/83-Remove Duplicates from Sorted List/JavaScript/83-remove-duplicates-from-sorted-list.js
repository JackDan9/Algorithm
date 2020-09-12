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
var deleteDuplicates = function(head) {
    if(head===null || head.next === null) {
        return head;
    }

    current_node = head;
    next_node = head;

    while(current_node !== null) {
        next_node = current_node.next;

        if(next_node !== null) {
            if(current_node.val === next_node.val) {
                current_node.next = next_node.next;
                next_node.next = null;
            } else {
                current_node = current_node.next;
            }
        } else {
            current_node = current_node.next;
        }
    }

    return head;
};