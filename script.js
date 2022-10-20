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
  let input = window.prompt("How long would you like your password to be? Select between 8 - 128 characters.");
  let passwordLength = parseInt(input);

