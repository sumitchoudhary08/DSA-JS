const arr = [10, 2, 5, 3, 8, 9];

const searchElement = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) return i;
  }
  return -1;
};

const result = searchElement(arr, 4);
console.log(result);
