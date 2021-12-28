# hw-password-gen-js
Javascript Password Generator

##
This is a simple Password generator as the name suggests.
![Password generator page on Load](./images/psg1.jpg "Initial Page")

When you click on the "Generate Password" button a window will open asking you to input your desired password length. 

![Password generator password length Input](./images/psg2.jpg "Password Length Window")

This password must be at minimum 8 characters and at maximum 128 characters. If outside these parameters it will give an error alert window.

![Password generator password length Error](./images/psg3.jpg "Password Length Error Window")

After you enter a valid length a series of windows will open asking you if you'd like to include a type of characters to include in your password. They are upper case characters, lower case characters, numbers, and special characters like "@", "!", or, ")".

![Password generator Upper Case asking window](./images/psg4.jpg "Upper Case Window")
![Password generator Lower Case asking window](./images/psg5.jpg "Lower Case Window")
![Password generator Numbers asking window](./images/psg6.jpg "Numbers Window")
![Password generator Special Characters asking window](./images/psg7.jpg "Special Characters Window")

If you have not selected any character options the following window will appear to alert you that a password cannot be generated.

![No criterion selected error window](./images/psg9.jpg "No Criterion Window")


After you've made your choices your newly generated password will display in the text box above the Generate Password button.

![New password displayed on page](./images/psg8.jpg "New Password Displayed")