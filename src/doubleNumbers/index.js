/* eslint-disable-next-line */
export const doubleNum = num => {
  const numStr = num.toString();
  const firstPart = numStr.slice(0, numStr.length / 2);
  const secondPart = numStr.slice(numStr.length / 2);
  return firstPart === secondPart ? num : num * 2;
};
