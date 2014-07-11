//app.js
//
//Functions
//
//Examples of creating functions.
//
//Z. Ames 7/11/14

var prompt = require ('sync-prompt').prompt;

//creates function that adds one
function increment(x){
  x++;
  return x;
}

// creates function that squares
function square (x){
x*=x
return x;
}

// creates function that calculates area of a room
function area(length, width){
  return length*width
}

// creates function that calculates volume
function volume(length, width, depth){
  return area(length,width)*depth
}

//This function prints hello on the screen
function sayHello(){
console.log('Hello')
}

//This function takes a string and returns it in all caps
function makeUpper(string){
return string.toUpperCase();
}

//This function tells you if someone can leagaly drink or not.
function canDrink(age){
return (age >=21);
}

// Assign letter grades to numbers
function letterGrade(grade){
if (grade>= 90){
return 'A';
}else if(grade>=80 && grade <90){
  return 'B';
}else if(grade>=70 && grade <80){
  return 'C';
}else if(grade>=60 && grade <70){
  return 'D';
}else{
  return 'F'
}}

// Add tax to ammount and return final value
function addTax (cost,tax){
return (cost+(tax/100)*cost).toFixed(2);
}

//takes in an array and add all values together
function sum (array){
var sum =0;
  for (i=0; i<array.length;i++){
  sum+=array[i];
}
return sum;
}

// calculates factorials
function factorial(n){
var product = 1
for (i=2; i<=n; i++){
      product *=i;
};
return product
}


//dice rolling function
function  rollDie(){
return Math.floor(Math.random()*6+1);
}

//are two numbers the same?
function isPair(roll1,roll2){
return (roll1===roll2)}

//roll many pairs of dice. If the pair matches then count
function countPairs(rollNum){
var count = 0;
for (i=0; i<rollNum; i++){
  if(isPair(rollDie(), rollDie())){
    count++;
  }}return count 
  }





//samples
var z = increment (3);
console.log(z);

z = square (9);
console.log('the square is '+z);

z=area(5,4);
console.log('The area is '+z);

z=volume(2,3,2);
  console.log('The volume is '+z);

z=area(square(increment(3)+increment(4)), square(2));
console.log('The final answer is '+z);

sayHello();

console.log(makeUpper('I love Caps!'));

console.log(canDrink(22));

console.log(letterGrade(70));

console.log(addTax(100,1.5));

var array = [2, 3, 4];
console.log('The sum of your array is '+ sum(array));

console.log(factorial(5));


for(k=0; k<=20; k++)
{console.log('roll= '+rollDie())}

console.log(isPair(3,3));

console.log(countPairs(100000));
