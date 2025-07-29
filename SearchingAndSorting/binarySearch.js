const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] == target) {
      return middle;
    } else if (target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};
const arr = [1, 3, 4, 5, 8, 9];
console.log(binarySearch(arr, 9));
