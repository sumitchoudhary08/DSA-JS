const removeElement = (nums, val) => {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};

const arr = [3, 1, 3, 4, 3, 3, 3, 7, 8, 3];

const result = removeElement(arr, 3);

console.log(result);
