const moveZeros = (nums) => {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
  }

  for (let j = p; j < nums.length; j++) {
    nums[j] = 0;
  }
  console.log(nums);
};

const arr = [0, 1, 0, 3, 12, 0];

moveZeros(arr);
