// Assignment code here

function randomListItem(list) {
  return list[randomInteger(list.length)];
}

function randomInteger(min, max) {
  if (!max) {
    max = min;
    min = 0;
  } 
  let someThing = Math.random()
  return Math.floor(min*(1 - someThing) + someThing * max);
}

function generatePassword() {
  let input = window.prompt("Choose the length of your Password between 8 - 128 characters.");
  let passwordLength = parseInt(input);

  if (isNaN(passwordLength)) { // this will only allow a number to be entered, without a warning message.
    window.alert("Please enter a number");
    return writePassword();
  }

  if (passwordLength < 8) { 
    window.alert("Password is too short. Please enter a password between 8 - 128 characters.");
    return writePassword();
  } else if (passwordLength > 128) {  
    window.alert("Password is too long. Please enter a password between 8 - 128 characters.");
    return writePassword();
  }

  let numbers = window.confirm("Would you like to use numbers in your password?"); // number yes/no
  let lowerCase = window.confirm("Would you like to use lower case letters in your password?");// lower case yes/no
  let upperCase = window.confirm("Would you like to use upper case letters in your password?");// upper case yes/no
  let specialSymbols = window.confirm("Would you like to use special characters in your password?");// symbol yes/no

  let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //list of numbers that could be in password
  let lowerCaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  let upperCaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  let specialSymbolsList = ['!', '@', '#', '$', '%', '*', '(', ')', '+', ',', '<', '>', '=', '[', ']', '?']; //list of symbols the user could have in their password

  let userChoices = []; // the array the user creates when selecting the contents of their password

  if (numbers === true) { // if user selects yes for number in password, add num list to array
    userChoices.push(numberList);
  }

  if (lowerCase === true) { // if user selects yes for lower case in password, add lowercase list to array
    userChoices.push(lowerCaseList);
  }

  if (upperCase === true) { // if user selects yes for upper case in password, add uppercase list to array
    userChoices.push(upperCaseList);
  }

  if (specialSymbols === true) { // if user selects yes for symbols in password, add symbols list to array
    userChoices.push(specialSymbolsList);
  }

  if (userChoices.length === 0) { // if user selects no for all criteria for password, reroute them to start of choices
    window.alert("You must select atleast one of catagories!");
    return writePassword();
  }

  let generatePassword = ''; // empty array where the randomly generated password will go

  for (let x = 0; x < passwordLength; x++) {
    let randomListCharacter = randomListItem(userChoices);
    let randomCharacter = randomListItem(randomListCharacter);
    generatePassword += randomCharacter;
  }

  return generatePassword; // this provides the random generated password to the user 
}
// generate element
var generateBtn = document.querySelector("#generate");

//  password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyFunction() {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  // Alert 
  alert("Copied the text: " + copyText.value);

  document.execCommand('copy')
}