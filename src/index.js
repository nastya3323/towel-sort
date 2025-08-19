// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];

  if (matrix) {
    for (let i = 0; i < matrix.length; i += 1) {
      matrix[i].forEach((_, idx) => {
        const index = i % 2 === 0 ? idx : matrix[i].length - 1 - idx;
        result.push(matrix[i][index]);
      });
    }
  }

  return result;
};
