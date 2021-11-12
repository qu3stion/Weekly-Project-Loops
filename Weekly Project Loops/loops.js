// Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.
function countToTen() {
  for (let i = 0; i <= 10 ; i++) {
      console.log(i);
  }
}
countToTen();

//  Using a while loop, return an array that contains all odd numbers between 3 and 103
//       arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.
let count = 5;

while (count < 103) {
  console.log(count)
  count +=2
};

// Use a loop to display the numbers 9 to 0 in descending order.
function countToZero(){
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
}
countToZero()
// Write a function computing the factorial of n
function factorialize(n){
  let result = n;
  if (n === 0 || n === 1)
    console.log(1);

  while (n > 1) {
    n--;
    result *= n
  }
  console.log(result);
}
factorialize(6)
factorialize(1)
factorialize(33)


// Write a function using a for loop that returns the sum of all numbers from 1 to n.
function returnSum(N){
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += i;
  }
console.log(total);
}
returnSum()
// Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ
function toUpperCase(str){
  let string = "donuts";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 != 0) {
      i = "Z"
    }
    console.log(string);
  }
}
toUpperCase()
