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

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

console.log(binarySearch(numbers, 24)); // 11
console.log(binarySearch(numbers, 8)); // 3
