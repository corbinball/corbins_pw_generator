// Assignment Code
var generateBtn = document.querySelector("#generate");
//input variables


// Write password to the #password input
function writePassword() {
  
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword() {

  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var confrimedTrues = [];
  var userChoice;
  var enter; 
  var pwLength;
  var password;
  var getLength;
  var getLower;
  var getUpper;
  var getNumber;
  var getSpecial;
  var choices;

  var userChoice = prompt ("How long do you want it? (8-128 characters");
    if (userChoice < 8 || userChoice > 128) {
      userChoice = parseInt(alert ("No, No, No. You gotta choose a number between 8-128."));
}     else if (userChoice >= 8 || userChoice <= 128) {
        console.log(userChoice);
        getLower =  confirm("How bout lower case letters in your password?");
        console.log(getLower);


        getUpper = confirm("Ok cool. Do you want upper case letters in your password?");
        console.log(getUpper);

        
        getNumber = confirm("Ok cool, cool. Do you want numbers in your password?");
        console.log(getNumber);

        getSpecial = confirm("Alright cool. Finally, do you want special characters in your password?");
        console.log(getSpecial);
};

    if (!getLower && !getUpper && !getNumber && !getSpecial) {
      choices = alert("I can't work with that! Sorry but, you'll have to try again.");
}   
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// hint: console.log(Math.floor(Math.random() * alpha.length))
  //prompt number of characters-check
  //get value from that prompt-check
  //promt whether to include speical characters-check
  // if ok, add special characters-check
  //!Math.floor(Math.random() * arr[confrimedTrues].length)