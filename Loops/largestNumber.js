//WAP to find the largest number in given array.

const arr = [4, -6, 8, 7, 3, -5, 101];

const largestNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 1) {
      return "Empty array";
    }

    if (arr.length == 1) {
      return arr[0];
    }

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return max;
  }
};

const result = largestNumber(arr);

console.log(result);
