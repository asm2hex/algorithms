var num1 = [9, 4, 3, 1, 8];
var num2 = [7, 5, 2, 6];

var array2array = function (arr1, arr2) {
  var merged = arr1.concat(arr2);
  var sorted = merged.sort(function (uno, dos) {
    return uno - dos;
  });

  return sorted;
};

console.log(array2array(num1, num2));