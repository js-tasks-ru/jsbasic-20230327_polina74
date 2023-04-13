function highlight(table) {
  for (const row of table.lastElementChild.rows) {
    let statusTd = row.lastElementChild;
    let isAvailableTd = statusTd.dataset.available;
    let sex = statusTd.previousElementSibling.innerHTML;
    let age = row.firstElementChild.nextElementSibling.innerHTML;

    if (isAvailableTd === "true") {
      row.classList.add("available");
    } else if (isAvailableTd === "false") {
      row.classList.add("unavailable");
    } else {
      row.hidden = true;
    }

    if (sex === "m") {
      row.classList.add("male");
    } else if (sex === "f") {
      row.classList.add("female");
    }

    if (Number(age) < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
