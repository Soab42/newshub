function separateArray(array = []) {
  let firstArray;
  let secondArray;

  if (array.length <= 10) {
    firstArray = array;
    secondArray = [];
  } else if (array.length >= 11 && array.length <= 15) {
    firstArray = array.slice(0, array.length - 3);
    secondArray = array.slice(array.length - 3);
  } else if (array.length >= 16 && array.length <= 20) {
    firstArray = array.slice(0, array.length - 5);
    secondArray = array.slice(array.length - 5);
  } else if (array.length <= 30) {
    firstArray = array.slice(0, array.length - 10);
    secondArray = array.slice(array.length - 10);
  }

  return [firstArray, secondArray];
}

export default separateArray;
