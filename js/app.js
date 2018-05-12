'use strict';

var userPoints = 0;

//pseudo code below
//check if the user's answer is correct
//what is correct?
//find out what the answer is
//toLowerCase or toUpperCase
//use a confirm box?

//greetings / intro to game
alert('Welcome to my page! Can you guess the correct answer about me? Please answer the following questions with a "yes" or "no". It\'s okay to write "y" or "n".');
console.log ('Hello World!');

//ask user name
var user = prompt ('What is your name?');
console.log = ('The user\'s name is ' + user);

// first question using if/else

var guessHometown = prompt('Was I born in Germany?');
var lowerCaseGuessHometown = guessHometown.toLowerCase();

if (lowerCaseGuessHometown === 'no' || lowerCaseGuessHometown === 'n') {
  alert('Richtig! That\'s correct in German! I was born in Seoul, Korea.');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;

} else if (lowerCaseGuessHometown === 'yes' || lowerCaseGuessHometown === 'y') {
  alert('Falsch! That\'s incorrect in German! I was born in Seoul, Korea.');
  console.log('Answer is incorrect! Your score remains the same.');

} else {
  alert('Your input was not valid. Please try again.');
  console.log('questionDone remains false; therefore, the while loop will repeat the question');
}
  
console.log('Current score: ' + userPoints);

// second question using if else

var guessDiving = prompt('Did I go snuba diving?');
var lowerCaseGuessDiving = guessDiving.toLowerCase();

if (lowerCaseGuessDiving === 'yes' || lowerCaseGuessDiving === 'y') {
  alert('Pololei! That\'s correct in Hawaiian! I went snuba diving off Molikini Island, Hawaii!');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;

} else if (lowerCaseGuessDiving === 'no' || lowerCaseGuessDiving === 'n') {
  alert('Pololei Ole! That\'s incorrect in Hawaiian! I went snuba diving off Molikini Island, Hawaii!');
  console.log('Answer is incorrect! Score remains the same.');

} else {
  alert('Your input was not valid. Please try again.');
}
    
console.log('Current score: ' + userPoints);

// third question using if/else
      
var guessPetDog = prompt('Do I have a pet dog?');
var lowerCaseGuessPetDog = guessPetDog.toLowerCase();

if (lowerCaseGuessPetDog === 'yes' || guessPetDog === 'y') {
  alert('Grrrrrr! That\'s incorrect in Dog! I don\'t have a pet dog, yet.');
  console.log('Answer is incorrect! Score remains the same.');


} else if (lowerCaseGuessPetDog === 'no' || lowerCaseGuessPetDog === 'n') {
  alert('WoofWoof! That\'s correct in Dog! I don\'t have a pet dog, yet.');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;

} else {
  alert('That is not a valid input. Please try again.');
}
      
console.log('Current score: ' + userPoints);

      

// fourth question using if/else

var guessCatAllergy = prompt('Am I allergic to cats?');
var lowerCaseGuessCatAllergy = guessCatAllergy.toLowerCase();

if (lowerCaseGuessCatAllergy === 'yes' || lowerCaseGuessCatAllergy === 'y') {
  alert(' HiSs HiSs! That\'s incorrect in Feline. I love Garfield!');
  console.log('Answer is incorrect! Score remains the same.');

} else if (lowerCaseGuessCatAllergy === 'no' || lowerCaseGuessCatAllergy === 'n') {
  alert('Purrrrrrrrrr! That\'s correct in Feline. I love Garfield!');
  console.log('Answer is correct. Tallying score variable..');
  userPoints++;

} else {
  alert('That is not a valid input. Please try again.');
}
        
console.log('Current score: ' + userPoints);

// fifth question using if/else


var guessChickenPox = prompt('Did I get chicken pox twice in one year?');
var lowerCaseGuessChickenPox = guessChickenPox.toLowerCase();

if (lowerCaseGuessChickenPox === 'yes' || lowerCaseGuessChickenPox === 'y') {
  alert('Itchy! Itchy! That is correct! I\'ve had chicken pox twice in elementary school. ');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;


} else if (lowerCaseGuessChickenPox === 'no' || lowerCaseGuessChickenPox === 'n') {
  alert('Pucock! That is incorrect in Chicken! I\'ve had chicken pox twice in elementary school.');
  console.log('Answer is incorrect! Score remains the same.');

} else {
  alert('That is not a valid input. Please try again.');
}
          
console.log('Current score: ' + userPoints);

// Tallying total
alert('Thank you for visiting my page! Your final score: ' + userPoints + ' See you later!');
console.log('Player earned a final score of ' + userPoints + ' out of 5.' + 'This concludes the JavaScript portion.');