// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the initial number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
  let answer = 1;
  for (let i = 1; i <= int; i++) {
    answer *= i;
  }
  return answer;
}

module.exports = factorial;
