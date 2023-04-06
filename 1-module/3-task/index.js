function ucFirst(str) {
  if (!str) {
    return '';
  }
  let firstLetter = str.at(0).toUpperCase();
  return firstLetter + str.slice(1);
}

