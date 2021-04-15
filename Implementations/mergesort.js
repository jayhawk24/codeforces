function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }

  return sorted.concat(left.concat(right));
}

function mergesort(arr) {
  const n = arr.length;

  if (n < 2) return arr;

  let mid = Math.floor(n / 2),
    left = mergesort(arr.slice(0, mid)),
    right = mergesort(arr.slice(mid));

  return merge(left, right);
}

let arr = [1, 8, 89, 4, 5, 1, 2, 3, 5, 79, 3, 485, 69];
console.log(mergesort(arr));
