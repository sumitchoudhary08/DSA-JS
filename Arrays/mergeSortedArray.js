const mergeSortedArrayBestSoln = (arr1, m, arr2, n) => {
  p1 = m - 1;
  p2 = n - 1;
  for (let i = 0; i < m + n; i++) {
    if (p2 < 0 || (p1 >= 0 && arr1[p1] > arr2[p2])) {
      arr1[m + n - i - 1] = arr1[p1];
      p1 = p1 - 1;
    } else {
      arr1[m + n - i - 1] = arr2[p2];
      p2 = p2 - 1;
    }
  }

  console.log(arr1);
};

const mergeSortedArrayGoodSoln = (arr1, m, arr2, n) => {
  let copy = arr1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && copy[p1] < arr2[p2])) {
      arr1[i] = copy[p1];
      p1 = p1 + 1;
    } else {
      arr1[i] = arr2[p2];
      p2 = p2 + 1;
    }
  }

  console.log(arr1);
};

const arr1 = [1, 2, 3, 9, 0, 0];
const arr3 = [1, 2, 3, 9, 0, 0];
const arr2 = [2, 5, 12];

mergeSortedArrayBestSoln(arr1, 4, arr2, 3);
mergeSortedArrayGoodSoln(arr3, 4, arr2, 3);
