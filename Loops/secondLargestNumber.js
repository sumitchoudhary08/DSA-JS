//WAP to find the 2nd larges in the given array.

const arr = [12, 19, 14, 19, 5, -5, 8];

const secondLargest = (arr) => {
  if (arr.length == 0) {
    return "empty array";
  }

  if (arr.length == 1) {
    return "minimum two elements required";
  }

  let max1 = arr[0];
  let max2 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] != max1) {
      max2 = arr[i];
    }
  }
  return max2;
};

const result = secondLargest(arr);

console.log(result);
