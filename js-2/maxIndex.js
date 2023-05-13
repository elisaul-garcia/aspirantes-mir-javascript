// escribe la función maxIndex acá

function maxIndex(array) {
    if (array.length === 0) {
      return -1;
    }
    let max = array[0];
    let maxIndex = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        maxIndex = i;
        max = array[i];
      }
    }
  
    return maxIndex;
  }
  

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1