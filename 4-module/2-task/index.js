function makeDiagonalRed(table) {
  for (const rowIndex in Array.from(table.rows)) {
    const row = table.rows[rowIndex];

    for (const cellIndex in Array.from(row.cells)) {
      const cell = row.cells[cellIndex];
      if (rowIndex === cellIndex) {
        cell.style.backgroundColor = "red";
      }
    }
  }
}
