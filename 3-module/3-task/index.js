function camelize(str) {
  let newStr = str
    .split("-")
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return item.at(0).toUpperCase() + item.slice(1);
    })
    .join("");

  return newStr;
}
