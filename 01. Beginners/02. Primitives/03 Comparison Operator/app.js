//Comparison Operator

/**
----------------------------------------------------------------
//Relational Operator
// Greater then >, Less then <, Gretaer then or equal to >=, & Less then or equal to <=
console.log(10 > 10); // false
console.log(10 < 10); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true
----------------------------------------------------------------
*/

/**
//Equality Operator
//Strict Equality (type + value) ===, Strict non-equality !==, lose equality ==, lose not equal to !=.

console.log(10 === '10'); //false due to diff types
console.log(10 === 10); //true
console.log(10 !== 10); // false
console.log(10 == 10); //true
console.log(10 != 10);
*/

//------------------------------------------------------------
//Practice
//1. Create variable name (firstNum) & store your first fav number.
let firstNum = 28;

//2. Create variable name (secondNum) & store your second fav number.
let secondNum = 22;

//3. Check (firstNum is greater then secondNum)
console.log(firstNum > secondNum);

//4. Check (firstNum is less then secondNum)
console.log(firstNum < secondNum);

//5. Check (firstNum is greater then & equal to secondNum)
console.log(firstNum >= secondNum);

//6. Check (firstNum is less then & equal to secondNum)
console.log(firstNum <= secondNum);

//7. Check (firstNum is equal to secondNum) using strict equality operator.
console.log(firstNum === secondNum);

//8. Check (firstNum is equal to secondNum) using loose equality operator.
console.log(firstNum == secondNum);

//9. Check (firstNum is equal to secondNum) using strict non-equality operator.
console.log(firstNum !== secondNum);

//10. Check (firstNum is equal to secondNum) using loose non-equality operator.
console.log(firstNum != secondNum);
