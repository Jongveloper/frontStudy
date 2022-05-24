const l1 = [1, 2, 4];
const l2 = [1, 3, 4];

const mergeTwoLists = function (list1, list2) {
  // 리스트 1이나 리스트 2가 null이면 둘 중 다른 리스트의 나머지를 리턴
  if (!list1) return list2;
  if (!list2) return list1;

  // list1.val 이 list2.val 보다 작으면 list1의 next를 list2로 옮겨줌
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

console.log(mergeTwoLists(l1, l2));
