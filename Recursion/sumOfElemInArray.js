let arr = [5, 2, 4, 1, 0, 3];

const sumOfElemInArray1 = (index) => {
  if (index === arr.length - 1) return arr[index];

  return arr[index] + sumOfElemInArray1(index + 1);
};

const sumOfElemInArray = (num) => {
  if (num === 0) return arr[num];

  return arr[num] + sumOfElemInArray(num - 1);
};

console.log(sumOfElemInArray(arr.length - 1));
console.log(sumOfElemInArray1(0));
