function intersectArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}

const array1 = [5, 2, 8, 4, 10, 3];
const array2 = [6, 4, 10];
console.log(intersectArrays(array1, array2)); 