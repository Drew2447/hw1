//function that takes a number and doubles it
// yarn jest -t 'test doubleNumber'
const doubleNumber = (num) => {
  num = num * 2
  return num;
  
};

/// function that takes a number and returns 'odd' or 'even'
// yarn jest -t 'test isOddOrEven'
const isOddOrEven = (num) => {
  if (num%2 == 0)
    console.log('even');
  else
  console.log('odd');
};

//function that return a random number 0-5
// yarn jest -t 'test randomNumber'
const randomNumber = (maxLimit = 5 ) => {
  let rand = Math. random() * maxLimit;

  return Math.round(rand);

};

/// function that takes two numbers num and 'opp'
/// opp can be +, -, /, or *
// yarn jest -t 'test randomNumber'
const calc = (num1, num2, opp) => {
  if (opp === '+')return (num1 + num2)
  if (opp === '-')return (num1 - num2)
  if (opp === '/')return (num1 / num2)
  if (opp === '*')return (num1 * num2)
  
};

//function that takes a string and return the number of vowels it has
// *lowercase only, and never count y
// yarn jest -t 'test vowelCount'
const vowelCount = (str) => {let vowelsCount = 0;

  //turn the input into a string
  let string = str.toString();

  //loop through the string
  for (let i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};
  


/// function that takes an array of numbers and returns sum
// yarn jest -t 'test getSum'
const getSum = (numbers) => {
  return numbers.reduce(function(a,b) {
    return a + b
  });
}


/// function that takes an array of numbers and returns highest num
// yarn jest -t 'test getHighNum'
const getHighNum = (numbers) => {
  let nums =[3]

console.log(largest);
  // TODO
};
/// function that takes an array of numbers and returns lowest num
// yarn jest -t 'test getLowNum'
const getLowNum = (numbers) => {
  // TODO
};
/// function that takes an array of numbers and returns true if sorted (low to high only)
// yarn jest -t 'test isSorted'
const isSorted = (numbers) => {
  // TODO
};

//  write a function that takes a number (0-100)
//  return 'fizz' if only divisible by 3
//  return 'buzz' if only divisible by 5
//  return 'fizzbuzz' if divisible by  3 and 5
//  return the number if none apply
// yarn jest -t 'test fizzbuzz'
const fizzbuzz = (num) => {
    //TODO
};

module.exports = {
  doubleNumber,
  vowelCount,
  isOddOrEven,
  calc,
  getHighNum,
  getLowNum,
  getSum,
  isSorted,
  fizzbuzz,
  randomNumber,
};
