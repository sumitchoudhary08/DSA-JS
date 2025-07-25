const missingNumber = (nums) => {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
  }

  return totalSum - sum;
};

const nums = [1, 0, 3, 4];

console.log(missingNumber(nums));
