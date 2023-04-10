function filterRange(arr, a, b) {
  let newArr = arr.filter((item) => {
    if (a <= item && b >= item) {
      return true;
    }
    return false;
  });
  return newArr;
}
