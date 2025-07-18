// * * * * *
// * * * *
// * * *
// * *
// *
const reverseStarPyramid = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = i; j < count; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
};

reverseStarPyramid(5);
