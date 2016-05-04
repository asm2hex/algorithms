var reverseMe = function (word) {
  var reversed = [];
  for (var i = 0; i < word.length; i++) {
    reversed = word.split('').reverse().join('');
  }
  return reversed;
};

console.log(reverseMe('assignment'));