export const squashRow = row => {
  // filter all the zeros
  const filteredRow = row.filter(number => number != 0);

  // combine matching pairs, (double the first, remove the second)
  for (let i = 0; i < filteredRow.length - 1; ++i) {
    const first = filteredRow[i];
    const second = filteredRow[i + 1];

    if (first == second) {
      filteredRow[i] = first * 2;
      filteredRow[i + 1] = 0;
    }
  }

  // fillter all the zeros again
  const result = filteredRow.filter(number => number != 0);

  while (result.length < 4) {
    result.push(0);
  }

  return result;
};

export const indicesOfFreeCells = field => {
  return field
    .map((number, index) => (number == 0 ? index : null))
    .filter(n => n != null);
};
