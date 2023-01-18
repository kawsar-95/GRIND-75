/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
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
const middleNode = (head) => {
  let backward = head;
  let forward = head;

  while (forward) {
    if (!forward.next) break;
    forward = forward.next.next;
    backward = backward.next;
  }

  return backward;
};
// @lc code=end

