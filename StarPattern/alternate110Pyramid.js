// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

const alternate110Pyramid = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
      row = row + toggle + " ";
      toggle = toggle == 1 ? 0 : 1;
    }
    console.log(row);
  }
};

alternate110Pyramid(5);
