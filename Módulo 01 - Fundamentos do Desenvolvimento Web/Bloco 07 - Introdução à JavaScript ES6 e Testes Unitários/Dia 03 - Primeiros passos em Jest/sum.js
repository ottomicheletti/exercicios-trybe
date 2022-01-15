const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw 'parameters must be numbers';
  }
};

module.exports = sum;
