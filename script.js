// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
var genArrays = [];
var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var loCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums =  [0,1,2,3,4,5,6,7,8,9];
var specChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~"];

function userInput() {
  userInputText = prompt("Please enter you desired password length. Note: It must be between 8 and 128 characters in length","Ex: 8,20,100");
   {if (userInputText>=8 && userInputText<=128) upperInput();
   else {alert("Your password length is outside of the given parameters. Please try again.");};
    };
  };

function upperInput() {
  var upperInput = confirm("Would you like upper case characters in your password? Press cancel for No.");
   if (upperInput===true) prepUpper();
      else if (upperInput===false) lowerInput();
};

function prepUpper() {
  genArrays.push.apply(genArrays,upCase);
  lowerInput();

};

function lowerInput() {
  var lowerInput = confirm("Would you like lower case characters in your password? Press cancel for No.");
   if (lowerInput===true) prepLower();
      else if (lowerInput===false) numberInput();

};

function prepLower () {
  genArrays.push.apply(genArrays,loCase);
  numberInput();
};

function numberInput() {
  var numberInput= confirm("Would you like Numbers in your password? Press cancel for No.");
   if (numberInput===true) prepNumbers()
      else if (numberInput===false) specInput();

};

function prepNumbers() {
  genArrays.push.apply(genArrays,nums);
  specInput();
};

function specInput() {
  var specInput = confirm("Would you like special characters in your password? Press cancel for No."); 
 { if (specInput===true) prepSpec();
    else if (specInput===false) anyCrit();};

};

function prepSpec() {
  genArrays.push.apply(genArrays,specChar);
  anyCrit();
};

function anyCrit() {
  if (genArrays[0]===undefined) {alert("You have not selected any criterion. Please select at least one.");

  } else { writePassword()
    
    };

};

var password = ""

function genPass() {
  genArrays = genArrays.sort(() => Math.random() - 0.5);
  for (var i = 0; i < userInputText; i++) {
   password += genArrays[i];
  };
  return password;
   
};
  

function writePassword() {
  var password = genPass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", userInput);
