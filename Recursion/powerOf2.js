const powerOf2 = (nums) => {
  if (nums == 1) return true;
  else if (nums < 1 || nums % 2 !== 0) {
    return false;
  }

  return powerOf2(nums / 2);
};

const result = powerOf2(12);

console.log(result);
