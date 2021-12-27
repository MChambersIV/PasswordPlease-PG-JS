// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var generator = {
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numerals:  [0,1,2,3,4,5,6,7,8,9],
  specialCharacters: ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~"],
};

function stepOne() {
  var inputOne = prompt("Please enter you desired password length. Note: It must be between 8 and 128 characters in length","Ex: 8,20,100");
   if (inputOne>=8 && inputOne<=128) stepTwo();
   else {alert("Your password length is outside of the given parameters. Please try again.");
    };
  };

function stepTwo() {
  var inputTwo = confirm("Would you like upper case characters in your password? Press cancel for no.");
    if (inputTwo===true) stepThree();
      else if (inputTwo===false) stepThree();
};
function stepThree() {
  var inputThree = confirm("Would you like lower case characters in your password? Press cancel for no.");
    if (inputThree===true) stepFour();
      else if (inputThree===false) stepFour();
};
function stepFour() {
  var inputFour= confirm("Would you like Numbers in your password? Press cancel for no.");
    if (inputFour===true) stepFive()
      else if (inputFour===false) stepFive();
};
function stepFive() {
  var inputFive = confirm("Would you like special characters in your password? Press cancel for no.");
    if (inputFive===true) genPass();
      else if (inputFive===false) genPass();
};

function genPass() {
 

};

// Add event listener to generate button
generateBtn.addEventListener("click", stepOne);

