function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    function mergeTwoLists(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;

        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = (l1 !== null) ? l1 : l2;
        return dummy.next;
    }

    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            mergedList.push(mergeTwoLists(l1, l2));
        }
        lists = mergedList;
    }

    return lists[0];
}

// Test cases
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

let result = mergeKLists([l1, l2, l3]);
while (result !== null) {
    console.log(result.val);
    result = result.next;
}
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
