// Assignment Code
var alpha = "abcdefghijklmnopqrstuvwxyz"
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specCharacter = "!@#$%^&*()?|/<>.[],{}~"
var number = "0123456789"

//ask all the questions and returns the pw
function createGeneratePassword() {

//How many characters would you like your password to contain (must be between 8 and 128 characters)? pswd length
  var length = parseInt(
    prompt("How many characters would you like your password to contain? * It must be between 8 and 128 characters.")
  );

//make sure that a number is entered into input
if  (isNaN(length)=== true) {
  alert ("Your password length must be given as a number. Please try again.")
}

// 8 characters and no more than 128 characters, length of password
if (length < 8 || length > 128) {
  alert( "Your password must have at least 8 characters, but no more than 128 characters. Please try again.");
  
}

//  lowercase, 
var containsAlpha = confirm("Please click OK to confirm including lowercase characters");

//uppercase,  
var containsAlphaUpper = confirm("Please click OK to confirm including uppercase characters");

//numeric
var containsNumber = confirm("Please click OK to confirm including number(s)");

//special characters
var containsSpecCharacter = confirm("Please click OK to confirm including character(s)");

//WHEN I answer each prompt, will not make pswd under this condition- all are false
if (containsAlpha === false &&
    containsAlphaUpper  === false &&
    containsNumber === false &&
    containsSpecCharacter  === false )
    {
    alert("You must choose at least one of the character types. Please try again.");
    return;
    }

// what a person's options are for password
var passwordOptions = {
  length: length, 
  containsAlpha: containsAlpha, 
  containsAlphaUpper: containsAlphaUpper, 
  containsNumber: containsNumber, 
  containsSpecCharacter: containsSpecCharacter
};
  return passwordOptions;

}
// the pswd needs to be random
function makeRandom(characters) {
  var randomInput = Math.floor(Math.random() * characters.length);
  var randomNext = characters[randomInput];

  return randomNext;
}

//generate pw return it
function generatePassword() {
  
  
//options for password
  var options = createGeneratePassword();

  //the outcome
  var outcome = [];
  //what are the optional characters
  var optionalCharacters = [];
  //what characters must be included
  var includedCharacters = [];

//THEN my input should be validated and at least one character type should be selected
if (options.containsAlpha) {
  optionalCharacters = optionalCharacters.concat(alpha);
  includedCharacters.push(makeRandom(alpha));
}

// selects upper case to be in password
if (options.containsAlphaUpper) {
  optionalAlphaUpper = optionalCharacters.concat(alphaUpper);
  includedCharacters.push(makeRandom(alphaUpper));
}
//selects number to be in password 
if (options.containsnumber) {
  optionalCharacters = optionalCharacters.concat(number);
  includedCharacters.push(makeRandom(number));
}
//selects spec character to be in password 
if (options.containsSpecCharacter) {
  optionalCharacters = optionalCharacters.concat(specCharacter);
  includedCharacters.push(makeRandom(specCharacter));
}
//create a loop for the password depending on length of pswd  to keep selecting from options untill length fulfilled
for (var i = 0; i < options.length; i++) {
  var optionalCharacters = makeRandom(optionalCharacters);

  outcome.push(optionalCharacters);
}
//add in included character for return
for (var i = 0; i < includedCharacters.length; i++) {
  outcome[i] = includedCharacters[i];
}

// outcome strong
return outcome.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

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
