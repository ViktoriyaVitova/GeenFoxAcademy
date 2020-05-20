let i;

console.log("Building blocks. Create a loop which prints the numbers from 0-9.");

let userCount = 9;

for ( i = 0; i <= userCount; i++) {
console.log(i);
}
//
console.log("Building blocks. Change the previous loop to print the numbers from 1 to 10.");

userCount = 10;

for ( i = 1; i <= userCount; i++) {
console.log(i);
}
//
console.log("Building blocks. Print the even numbers between 0 and 20.")

userCount = 20;
for (i = 0; i < userCount; i++) {
    if (i % 2 === 0){
        console.log(i);
    }

}
//
console.log("Use your previous for loops and create a function which print the first N numbers.")

let printNumbersTill= (n) => {
    for (i = 0; i <= n; i++) {
        console.log(i);
      }
}
printNumbersTill(20);
printNumbersTill(15);
//
console.log("Create a function which gets a name as parameter and then returns a greeting to the specified person.");

let helloFunction= (name) => {
    return ("Hello, " + name + "!");

}
console.log(helloFunction("Mark"));
//
console.log("Create a function which gets an array as parameter and prints each value from it.");

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };
  printValues([0, 3, 6, 7, 9]);
  //
  console.log("Change your previous printValues function to use forEach loop.")

  let printValues2 = [0, 3, 6, 7, 9];

  printValues2.forEach((number) => {
    console.log(number);
  });