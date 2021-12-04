let word = 'tryber';
let wordBackwards = [];

for (let index = word.length - 1; index >= 0; index--) {
  wordBackwards.push(word.charAt(index));
}

console.log(wordBackwards.join(''));
