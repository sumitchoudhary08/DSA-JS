//WAP to find the smalles number int the array.

const arr = [-2, -7, 12, 9, 5, 0, -9];

const samllestNumber = (arr) => {
  if (arr.length == 0) {
    return "Empty array";
  }

  if (arr.length == 1) {
    return arr[0];
  }
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

const result = samllestNumber(arr);

console.log(result);
