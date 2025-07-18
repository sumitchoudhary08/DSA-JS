// * * * *
// * * * *
// * * * *
// * * * *

const squarePattern = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = 0; j < count; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
};

squarePattern(4);
