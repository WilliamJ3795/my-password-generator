// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var choiceUpper;
var choiceLower;
var choiceNumber;
var choiceSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  

// Var newUpper to blank array/ toUpperCase converts a string to uppercase letters
var newUpper = []; 
var toUpper = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // user Input
  passwordLength = prompt("How many characters do want? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  if(!passwordLength) {
    alert("You must choose");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    choiceLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + choiceLower);
    choiceUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + choiceUpper);
    choiceNumber = confirm("Will this contain numbers?");
    console.log("Number " + choiceNumber);
    choiceSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + choiceSpecial);

  }
  // alerts user if no option is chosen
  if (!choiceLower && !choiceUpper && !choiceNumber && !choiceSpecial) {  
    userChoices = alert("Let's try this again"); 
  // 4 user options
  } else if (choiceLower && choiceUpper && choiceNumber && choiceSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special); // concat() joins mutiple arrays and returns a new array 
    console.log(userChoices);
  }
  // 3 user options
  else if (choiceLower && choiceUpper && choiceNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (choiceLower && choiceUpper && choiceSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (choiceLower && choiceNumber && choiceSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (choiceUpper && choiceNumber && choiceSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 user options
  else if (choiceLower && choiceUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (choiceLower && choiceNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (choiceLower && choiceSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (choiceUpper && choiceNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (choiceUpper && choiceSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (choiceNumber && choiceSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
   // 1 user option
   else if (choiceLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (choiceUpper) {
    userChoices = newUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (choiceNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (choiceSpecial) {
    userChoices = special;
    console.log(userChoices);
  }
   // Empty variable for the password length
   var blankPassword = [];
    
   // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var anyChoices = userChoices[Math.floor(Math.random() * userChoices.length)]; //math.floor used with Math.random
    blankPassword.push(anyChoices);
    console.log(anyChoices);
  }
   // Join and return the password 
   var password = blankPassword.join("");
   console.log("Your new Pasword is: " + password);
   return password;
   
 };