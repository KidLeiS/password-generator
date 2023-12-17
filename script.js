// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passReqs = {
  passLen: 0,
  lenVal: false,
  characters: [],
  charVal: false,
};

function resetPassReqs() {
  passReqs.lenVal = false;
  passReqs.charVal = false;
  passReqs.characters = [];
}

// Function to prompt user for password options
function getPasswordOptions() {
  passReqs.passLen = prompt("Please input the length of your password: ");
  if (passReqs.passLen > 7 && passReqs.passLen < 129 && passReqs.passLen % 1 == 0) {
    passReqs.lenVal = true;
  };  
  while (!passReqs.lenVal) {
    passReqs.passLen = prompt("Please input the length of your password (between 8 and 128 characters): ");
      
    if (passReqs.passLen > 7 && passReqs.passLen < 129 && passReqs.passLen % 1 == 0) {
      passReqs.lenVal = true;
    };
  };
  

  while (!passReqs.charVal) {
    var contLower = confirm("Do you want your password to contain lowercase letters?");
    if (contLower) {
      passReqs.characters = passReqs.characters.concat(lowerCasedCharacters);
    }

    var contUpper = confirm ("Do you want your password to contain uppercase letters?");
    if (contUpper) {
      passReqs.characters = passReqs.characters.concat(upperCasedCharacters);
    }

    var contNumb = confirm ("Do you want your password to contain numbers?");
    if (contNumb) {
      passReqs.characters = passReqs.characters.concat(numericCharacters);
    }

    var contSpec = confirm ("Do you want your password to contain special characters ($@%&*, etc)?");
    if (contSpec) {
      passReqs.characters = passReqs.characters.concat(specialCharacters);
    }

    if (passReqs.characters.length > 0) {
      passReqs.charVal = true;
    } else {
      alert("Please select at least one character type");
    }
    
  };
  
  console.log(passReqs.characters);
}

// Function for getting a random element from an array
function getRandom(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for (var i = 0; i < passReqs.passLen; i++) {
    password = password + getRandom(passReqs.characters).toString();
  };
  console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  resetPassReqs();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);