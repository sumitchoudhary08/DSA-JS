// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const numberPyramid = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
};

numberPyramid(8);
