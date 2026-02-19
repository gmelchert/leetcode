import { ListNode } from "../utils";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let tail = head;
    
    while (tail.next) {
        length++;
        tail = tail.next;
    }

    tail.next = head;
    k = k % length;
    
    if (k === 0) {
        tail.next = null;
        return head;
    }

    let stepsToNewTail = length - k - 1;
    let newTail = head;

    while (stepsToNewTail > 0) {
        newTail = newTail.next!;
        stepsToNewTail--;
    }

    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};