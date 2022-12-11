// Assignment code here
function generatePassword(length) {
  console.log("You clicked the button!")


  // Prompt the user for password criteria
  // password l

  return " generated password";
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8-128 digits. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  } return true;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() 
  var correctPrompts = getPrompts(); // either T or F

  if(correctPrompts) {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);