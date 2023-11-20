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
const hasCycle = function(head) {
    const map = new Set();
    
    while (head !== null) {
        if (map.has(head)) {
            return true;
        }
        
        map.add(head);    
        head = head.next;
    }

    return false;
};