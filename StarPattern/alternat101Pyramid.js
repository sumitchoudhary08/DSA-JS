// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let toggle = 1;
const alternate101Pyramid = (count) => {
  for (let i = 0; i < count; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + toggle + " ";
      toggle = toggle == 1 ? 0 : 1;
    }
    console.log(row);
  }
};

alternate101Pyramid(10);
