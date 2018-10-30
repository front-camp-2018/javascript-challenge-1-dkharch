/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const sumNumber = num => {
    return num.split('').reduce((a, b) => Number(a) + Number(b));
  };
  return arr.sort((a, b) => sumNumber(a) - sumNumber(b));
};
