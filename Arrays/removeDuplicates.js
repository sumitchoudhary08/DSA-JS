const removeDuplicates = (nums) => {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5];

const result = removeDuplicates(arr);
console.log(result);
