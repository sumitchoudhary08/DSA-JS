// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

const reverseNumberPyramid = (count) => {
  for (let i = count; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j + " ";
    }
    console.log(row);
  }
};

reverseNumberPyramid(8);
