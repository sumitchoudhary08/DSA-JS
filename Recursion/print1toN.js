const n = 6;
const print1ToN = (num) => {
  if (num > n) return;

  console.log(num);
  print1ToN(++num);
};

print1ToN(1);
