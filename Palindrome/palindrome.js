const isPalindorme = (num) => {
  if (num < 0) return false;

  let rev = 0;
  const temp = num;
  while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    rev = 10 * rev + rem;
  }

  return temp === rev;
};

var result = isPalindorme(121);

console.log(result);
