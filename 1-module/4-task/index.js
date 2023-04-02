function checkSpam(str) {
  let inStr = str.toUpperCase();
  if (inStr.includes("XXX") || inStr.includes("1XBET")) {
    return true;
  }
  return false;
}
