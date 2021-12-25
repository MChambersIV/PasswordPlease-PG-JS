// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generator = {
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numerals:  [0,1,2,3,4,5,6,7,8,9],
  specialCharacters: ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~"],
};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  input = prompt("Please enter you desired password length. Note: It must be between 8 and 128 chracters in length","Ex: 8,20,100");
    if (input>=8 && input<=128) {alert("Please continue");}
     else {alert("Your password length is outside of the given parameters. Please try again.")

  };


});

//We want a password generator
    //When the password button on the html page is clicked a new random string of characters numbers and special characters will appear in the password box.

    //We need this button to run a function when clicked
      //This function must add characters to a string
      //This function must add special chracters to a string
      //This function must add numbers to a string
      //This function must order these at random
      //This new string must display in the box