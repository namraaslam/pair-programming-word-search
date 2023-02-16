const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((lettersRow) => lettersRow.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let transposeGrid = letters[0].map((col, i) => letters.map((row) => row[i]));

  const verticalJoin = transposeGrid.map((lettersCol) => lettersCol.join(""));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }


  return false;
};

module.exports = wordSearch