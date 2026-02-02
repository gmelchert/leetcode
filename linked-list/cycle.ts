import { ListNode } from "../utils";

function hasCycle(head: ListNode | null): boolean {
    const visited = new Set<ListNode>()
    let current = head

    while (current !== null) {
        if (visited.has(current)) {
            return true
        }

        visited.add(current)
        current = current.next
    }

    return false
}