const countDigits = (number) => {
  if (number == 0) return 1;
  let count = 0;
  number = Math.abs(number);
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }
  console.log(count);
};

countDigits(-123);
