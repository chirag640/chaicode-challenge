function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2);
while (result !== null) {
    console.log(result.val);
    result = result.next;
}
// Output: 7 -> 0 -> 8
