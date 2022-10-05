function mergeTwoSorted(arr1, arr2) {
  const merged = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      merged.push(arr1[leftIndex]);
      leftIndex += 1;
    } else {
      merged.push(arr2[rightIndex]);
      rightIndex += 1;
    }
  }

  return merged.concat(arr1.slice(leftIndex), arr2.slice(rightIndex));
}

export default function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const firstArr = arr.slice(0, midIndex);
  const secondArr = arr.slice(midIndex);

  return mergeTwoSorted(mergeSort(firstArr), mergeSort(secondArr));
}
