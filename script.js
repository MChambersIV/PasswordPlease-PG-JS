// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var genArrays = {
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numerals:  [0,1,2,3,4,5,6,7,8,9],
  specialCharacters: ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~"],
};

function stepOne() {
  var userInput = prompt("Please enter you desired password length. Note: It must be between 8 and 128 characters in length","Ex: 8,20,100");
   if (userInput>=8 && userInput<=128) upperInput();
   else {alert("Your password length is outside of the given parameters. Please try again.");
    };
  };

function upperInput() {
  var upperInput = confirm("Would you like upper case characters in your password? Press cancel for no.");
    if (upperInput===true) lowerInput();
      else if (upperInput===false) lowerInput();
};
function lowerInput () {
  var lowerInput = confirm("Would you like lower case characters in your password? Press cancel for no.");
    if (lowerInput===true) numberInput();
      else if (lowerInput===false) numberInput();
};
function numberInput() {
  var numberInput= confirm("Would you like Numbers in your password? Press cancel for no.");
    if (numberInput===true) specInput()
      else if (numberInput===false) specInput();
};
function specInput() {
  var specInput = confirm("Would you like special characters in your password? Press cancel for no.");
    if (specInput===true) genPass();
      else if (specInput===false) genPass();
};

function genPass() {
  if (stepTwo===true) {
    for (var i=0; i<inputOne; i++) {
     var i = generator.upperCase.sort(function(){return 0.5 - Math.random()});

    };
    
  


  };
 

};

// Add event listener to generate button
generateBtn.addEventListener("click", stepOne);

