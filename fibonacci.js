var fibonacci = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * fibonacci(num - 1);
}

console.log(fibonacci(5));