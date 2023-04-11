function makeFriendsList(friends) {
  const list = document.createElement("ul");
  for (const friend of friends) {
    const elem = document.createElement("li");
    elem.innerHTML = friend.firstName + " " + friend.lastName;
    list.append(elem);
  }
  return list;
}
