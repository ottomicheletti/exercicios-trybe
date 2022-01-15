const myRemove = (arr, item) => {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== item) {
      result.push(arr[i]);
    }
  }
  return result;
};

module.exports = myRemove;

console.log(myRemove([1, 2, 3, 4], 5));
