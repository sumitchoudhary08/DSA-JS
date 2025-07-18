// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

const numbersPyramid = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1) + " ";
    }
    console.log(row);
  }
};

numbersPyramid(8);
