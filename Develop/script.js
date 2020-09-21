// Assignment Code
var generateBtn = document.querySelector("#generate");

var aplha = "abcdefghijklmnopqrstuvwxyz"
var alpahaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var characters = "!@#$%^&*()?|/<>.[],{}~"
var number = "0123456789" 


//ask all the questions and returns the pw
function generatePassword(){

//How many characters would you like your password to contain (must be between 8 and 128 characters)? pswd length
  var length = parseInt(
    prompt("How many characters would you like your password to contain? * It must be between 8 and 128 characters.")
  );

//make sure that a number is entered into input
if  (isNaN(length)=== true) {
  alert ("Your password length must be given as a number. Please try again.")
}
//   length of the password
// 8 characters and no more than 128 characters 
if (length < 8 || length > 128) {
  alert( "Your password must have at least 8 characters, but no more than 128 characters. Please try again.");
  return;
}

//  lowercase, 
var containsAlpha = confirm("Please click OK to confirm including lowercase characters");

//uppercase,  
var containsAlphaUpper = confirm("Please click OK to confirm including uppercase characters");

//numeric
var containsNumber = confirm("Please click OK to confirm including number(s)");

//special characters

var containsCharacter = confirm("Please click OK to confirm including character(s)");

//WHEN I answer each prompt, will not make pswd under this condition- all are false
if (containsAlpha === false &&
    containsAlphaUpper  === false &&
    containsNumber === false &&
    containsCharacter  === false )
    {
    alert("You must choose at least one of the character types. Please try again.");
    return;
    }

// // switch (passwordOptionPrompt){
//   case 1:
//     containsAlpha;
//   case 2:
//     containsUpperAlpha;
//   case 3:
//   containsNumber;
//   case 4:
//   containsCharacter;
//   break;
//   }
// }


// what a person's options are for password
var passwordOptions = {
  length: length, 
  containsAlpha: containsAlpha, 
  containsAlphaUpper: containsAlphaUpper, 
  containsNumber: containsNumber, 
  containgsCharacter: containsCharacter
};
  return passwordOptions;

}
//THEN my input should be validated and at least one character type should be selected
if ()

//   generate pw return it

  function generatePassword() {
    var options = creategeneratePassword();
// the pswd needs to be random
function makeRandom(characters); {
return characters[Mathfloor]

}

//function for generate pswd
function generatePassword() {
  //options for password
  var options= getPasswordOptions();
  //the outcome
  var outcome = [];
  //what are the optional characters
  var optionalCharacters = [];
  //what characters must be included
  var includedCharacters = [];
}

//create a loop for the password depending on length of pswd  to keep selecting from options untill length fulfilled

//selects lower case to be in password 
if (options.containsAlpha) {
  optionalAlpha = optionalAlpha.concat(Alpha);
  includedCharacters.push(make)
}

//add in included character for return

// Write password to the #password input
function writePassword() {
//   WHEN I click the button to generate a password
  var password = generatePassword();
//   THEN the password is either displayed in an alert or written to the page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
