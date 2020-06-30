// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var create="";
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password1= prompt("How many characters do you want in your password?");
  if(password1 <8 || password1 > 12){
    alert("Please choose between 8 and 12.");
    password1;
  }
  else{
    for(var i=0; i<password1;i++) {
      create += charset.charAt(Math.floor(Math.random()*(charset.length)));
    };
  }
  
  console.log(create);
  const password3 = create;
  passwordText.value = password3;
  console.log(passwordText.value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
