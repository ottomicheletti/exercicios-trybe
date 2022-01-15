const fizzbuzz = (num) => {
  if (typeof num !== 'number') {
    return false;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 !== 0 && num % 5 !== 0) {
    return false;
  }
};

module.exports = fizzbuzz;
