import { ListNode } from "../utils";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result = new ListNode(0);
    let curr = result;

    while (list1 || list2) {
        if (list1 && list2) {
            let n: number;

            if (list1.val < list2.val) {
                n = list1.val
                list1 = list1.next;
            } else {
                n = list2.val
                list2 = list2.next;
            }

            curr.next = new ListNode(n);
        } else if (list1) {
            curr.next = new ListNode(list1.val);
            list1 = list1.next
        } else {
            curr.next = new ListNode(list2!.val);
            list2 = list2!.next;
        }
        curr = curr.next;
    }

    return result.next;
};