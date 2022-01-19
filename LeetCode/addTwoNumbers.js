//Definition
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



/**
 * function ListNode(val){
    this.val = val;
    this.next = null;
}
 */

const addTwoNumbers = (l1,l2) => {
    let resultHead = new ListNode(0);
    let result = resultHead;

    let sum = 0, carry = 0;
    let num1 = l1, num2 = l2;

    while(num1 || num2){
        sum = (num1 ? num1.val : 0) + (num2 ? num2.val : 0) + carry;
        carry = Math.floor(sum/10);
        result.next = new ListNode(sum % 10);
        result = result.next;
        num1 = num1 ? num1.next : null;
        num2 = num2 ? num2.next : null;
    }

    if(carry!==0){
        result.next = new ListNode(carry);
    }

    return resultHead.next;
    
}


var carry = 0;
  var sum = 0;

  var head = new ListNode(0);

  var now = head;
  var a = l1;
  var b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;