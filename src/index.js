// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];

  if (matrix) {
    for (let i = 0; i < matrix.length; i += 1) {
      for (let j = 0; j < matrix[i].length; j += 1) {
        const index = i % 2 === 0 ? j : matrix[i].length - 1 - j;
        result.push(matrix[i][index]);
      }
    }
  }

  return result;
};
