const maxConsecutiveOnes = (nums) => {
  let maxCount = 0;
  let currCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++;
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    }
  }

  console.log(Math.max(maxCount, currCount));
};

const nums = [1, 1, 0, 1, 1, 1, 1, 1, 1, 0];
maxConsecutiveOnes(nums);
