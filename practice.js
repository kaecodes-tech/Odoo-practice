// Binary search algorithm in JavaScript
// Works only on a sorted array.

function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (sortedArray[middle] === target) {
      return middle;
    }

    if (sortedArray[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const numbers = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72];

console.log(binarySearch(numbers, 23)); // 5
console.log(binarySearch(numbers, 99)); // -1
