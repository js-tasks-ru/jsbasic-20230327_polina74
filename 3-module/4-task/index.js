function showSalary(users = [], age) {
  let result = users
    .filter(function (item) {
      if (item.age <= age) {
        return true;
      }
      return false;
    })
    .map(function (item) {
      return item.name + ", " + item.balance;
    })
    .join("\n");
  return result;
}
