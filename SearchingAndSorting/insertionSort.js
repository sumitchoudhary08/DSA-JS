const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }
  return arr;
};

const arr = [8, 7, 4, 3, 5, 1, 2, -3, 9, 6, 0];
console.log(insertionSort(arr));

//T.C = O(n2);
//S.C = O(1) - constant;
