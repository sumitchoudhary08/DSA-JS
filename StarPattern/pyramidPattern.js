// *
// * *
// * * *
// * * * *
// * * * * *

const pyramid = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
};

pyramid(5);
