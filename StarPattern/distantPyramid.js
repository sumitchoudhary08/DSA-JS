//         *
//       * *
//     * * *
//   * * * *
// * * * * *

const distantPyramid = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = 0; j < count - (i + 1); j++) {
      row = row + " ";
    }

    for (let k = 0; k <= i; k++) {
      row = row + "*";
    }
    console.log(row);
  }
};

distantPyramid(5);
