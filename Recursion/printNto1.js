const printNto1 = (num) => {
  if (num == 0) return;

  console.log(num);
  printNto1(--num);
};

printNto1(5);
