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

  if (isNaN(passwordLength)) { // will only allow a number to be entered, without a warning message.
    window.alert("Please enter a number");
    return writePassword();
  }

  if (passwordLength < 8) { // password to short
    window.alert("Password is too short. Please enter a password between 8 - 128 characters.");
    return writePassword();
  } else if (passwordLength > 128) { // password to long 
    window.alert("Password is too long. Please enter a password between 8 - 128 characters.");
    return writePassword();
  }

  let numbers = window.confirm("Would you like to use numbers in your password?"); // number yes/no
  let lowerCase = window.confirm("Would you like to use lower case letters in your password?");// lower case yes/no
  let upperCase = window.confirm("Would you like to use upper case letters in your password?");// upper case yes/no
  let specialSymbols = window.confirm("Would you like to use special characters in your password?");// symbol yes/no

  let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //list of numbers that could be in password