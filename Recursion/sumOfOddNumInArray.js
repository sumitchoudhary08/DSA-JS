let arr = [2, 3, 4, 5, 6, 1];
const sumOfOddNumInArray = (num) => {
  let isOdd = arr[num] % 2 !== 0;
  if (num == 0) {
    return isOdd ? arr[num] : 0;
  }
  return (isOdd ? arr[num] : 0) + sumOfOddNumInArray(num - 1);
};

console.log(sumOfOddNumInArray(arr.length - 1));
