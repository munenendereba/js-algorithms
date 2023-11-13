//implementing fibonacci using memoization
const memo = {};

const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    memo[n] = n;
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }

  const outFib = fibonacci(n - 1) + fibonacci(n - 2);
  memo[n] = outFib;
  return outFib;
};

// Test your code with calls here:
console.log(fibonacci(20));
console.log(fibonacci(100));
