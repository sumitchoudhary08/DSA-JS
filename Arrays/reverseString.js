const reverseString = (nums) => {
  const n = nums.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = nums[i];
    nums[i] = nums[n - 1 - i];
    nums[n - 1 - i] = temp;
  }
  return nums;
};

const arr = ["s", "u", "m", "i", "t"];
const result = reverseString(arr);
console.log(result);
