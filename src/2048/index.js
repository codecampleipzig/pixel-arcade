export const squashRow = row => {
  const filledFields = row.filter(number => number != 0);

  for (let i = 1; i < filledFields.length; ++i) {
    if (filledFields[i - 1] == filledFields[i]) {
      filledFields[i - 1] *= 2;
      filledFields[i] = 0;
    }
  }
  const squashedRow = filledFields.filter(number => number != 0);

  return [...squashedRow, ...Array(4 - squashedRow.length).fill(0)];
};
