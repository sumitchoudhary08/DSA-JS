const reverseInteger = (num) => {
  const temp = num;
  let rev = 0;
  num = Math.abs(num);

  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  let limit = Math.pow(2, 31); // limit = 2**31;
  if (rev < -limit || rev > limit - 1) return 0;

  return temp < 0 ? -rev : rev;
};

const result = reverseInteger(12345);

console.log(result);
