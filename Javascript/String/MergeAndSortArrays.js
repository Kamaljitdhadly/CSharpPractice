function mergeAndSortArrays(arr1, arr2){
   const mergedarray = arr1.concat(arr2);
   return mergedarray.sort((a,b) => a - b);
}

const array1 = [1,2,3,5,4,6,7];
const array2 = [4,7,2,9,6,44,88,99,22]

var output = mergeAndSortArrays(array1, array2);
console.log(output);