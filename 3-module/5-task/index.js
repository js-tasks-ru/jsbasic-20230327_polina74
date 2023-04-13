function getMinMax(str) {
  let newArr = str
    .split(" ")
    .filter(function (item) {
      const value = parseFloat(item);
      if (!isNaN(value)) {
        return true;
      }
      return false;
    })
    .map(function (item) {
      return parseFloat(item);
    });

  let max = Math.max(...newArr);
  let min = Math.min(...newArr);

  return {
    min,
    max,
  };
}
