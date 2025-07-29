const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};
const arr = [1, 4, 5, 8, 3];

console.log(linearSearch(arr, 10));
