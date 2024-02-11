function separateArray(newsData = []) {
  let firstArray;
  let secondArray;

  const route = localStorage.getItem("route");

  let array = [];
  if (route === "") {
    // console.log(route);
    array = newsData?.slice(0, 9);
  } else {
    array = newsData;
  }
  // console.log(array);
  if (array.length === 9) {
    firstArray = array.slice(0, 6);
    secondArray = array.slice(6, 9);
  } else if (array.length >= 11 && array.length <= 15) {
    firstArray = array.slice(0, array.length - 3);
    secondArray = array.slice(array.length - 3);
  } else if (array.length >= 16 && array.length <= 20) {
    firstArray = array.slice(0, array.length - 5);
    secondArray = array.slice(array.length - 5);
  } else if (array.length >= 20) {
    firstArray = array.slice(0, array.length - 10);
    secondArray = array.slice(array.length - 10);
  }

  return [firstArray, secondArray];
}

export default separateArray;
