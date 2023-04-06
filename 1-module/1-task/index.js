function factorial(n) {
  let answer = 1;
  for (let index = n; index > 0; index--) {
    answer = answer * index;
  }
  return answer;
}
