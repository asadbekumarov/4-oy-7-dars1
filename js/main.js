function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
let result = sumArray(numbers);
console.log("javobi", result);