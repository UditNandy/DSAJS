// Largest Element in an Array
const largestElement = (arr) => {
  let max = arr[0];
  arr.forEach((val) => {
    max = Math.max(val, max);
  });
  console.log(max);
};

// Second Largest Element
const secondLargest = (arr) => {
  let max = arr[0];
  let secondMax = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  console.log(secondMax);
};

// Check if an array is sorted
const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

// Remove duplicates from sorted array
const removeDuplicates = (arr) => {
  let i = 0;

  while (i < arr.length) {
    let k = i + 1;
    while (arr[i] === arr[k]) {
      arr.splice(i, 1);
    }
    i++;
  }
  console.log(arr);
};

/* 
    Left Rotate an array (always take k = k % arr.length)
    1. Reverse 1st n-k elements
    2. Reverse last n elements
    3. Reverse the entire array
*/
const rotate = function (arr, k) {
  let n = arr.length;
  let d = k % n;
  reverse(arr, 0, n - d);
  reverse(arr, n - d, n);
  reverse(arr, 0, n);
};

const reverse = function (arr, start, end) {
  for (let i = start; i < (end + start) / 2; i++) {
    [arr[i], arr[end + start - i - 1]] = [arr[end + start - i - 1], arr[i]];
  }
};

/*
    Move 0's to the right
    1. Traverse through the array and find the 1st occurance of 0 and store it in j 
    2. Now set a pointer i = j+1 and start incrementing i 
    3. if(arr[i]!==0) swap arr[i] and arr[j] and increment j 
*/
const moveZeros = (arr) => {
  let j = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return;

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
};

// Missing Number
const missingNumber = (arr) => {
  let n = arr.length;

  let calcSum = (n * (n + 1)) / 2;

  let sum = arr.reduce((sum, val) => sum + val, 0);
  return calcSum - sum;
};

// Maximum consecutive 1s
var findMaxConsecutiveOnes = function (arr) {
  let max = 0;
  let curr = 0;
  arr.forEach((val) => {
    if (val === 1) {
      curr++;
      max = Math.max(curr, max);
    } else curr = 0;
  });
  return max;
};

/*  Find the number which appear only once while all other will appear twice
    1. Find the XOR of all the numbers
    2. XOR of 2 same numbers is always 0
*/
var singleNumber = function (arr) {
  let res = arr.reduce((acc, val) => acc ^ val, 0);
  return res;
};

// Union of 2 array
const union = function (arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
      i++;
    } else {
      if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
    j++;
  }
  return res;
};

/* 
    Next Permutation
    1. Find 1st index i from back such that arr[i]<arr[i+1]
    2. If index exist 
       ->Find smallest element greater then arr[i] in [i+1.....arr.length] and store its index(smallestIndex)
       ->Swap arr[i] arr[smallestIndex]
       ->Reverse [i+1.....arr.length]
    3. If index don't exist then reverse the entire array
*/
const nextPermutation = function (arr) {
  let index = -1;
  let min = Infinity;
  let minIndex = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    reverse(arr, 0, arr.length);
  } else {
    for (let j = arr.length - 1; j > index; j--) {
      if (arr[j] > arr[index]) {
        if (min > arr[j]) {
          min = arr[j];
          minIndex = j;
        }
      }
    }

    [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];

    reverse(arr, index + 1, arr.length);
  }

  console.log(arr);
};

// Stock buy and sell problem
const stockBuyAndSell = (arr) => {
  const n = arr.length;
  let max = 0;
  let curr = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > curr) curr = arr[i];
    else max = Math.max(max, curr - arr[i]);
  }
  console.log(max);
};

// Alternate +ve and -ve numbers
const alternatePositiveAndNegetive = (arr) => {
  const n = arr.length;
  const res = new Array(n).fill(0);
  let posIdx = 0;
  let negIdx = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      res[posIdx] = arr[i];
      posIdx += 2;
    } else {
      res[negIdx] = arr[i];
      negIdx += 2;
    }
  }

  console.log(res);
};

/* Rotate a matrix by 90 deg
    1.Find the transpose of the matrix
    2.Rotate each row of the matrix
*/
const rotateMatrix = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++)
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      [arr[i][j], arr[i][n - j - 1]] = [arr[i][n - j - 1], arr[i][j]];
    }
  }

  console.log(arr);
};

rotateMatrix([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
