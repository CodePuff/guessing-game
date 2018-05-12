'use strict';

var userPoints = 0;

//pseudo code below
//check if the user's answer is correct
//what is correct?
//find out what the answer is
//toLowerCase or toLowerCase
//use a confirm box?

//greetings / intro to game
alert('Welcome to my page! Can you guess the correct answer about me? Please answer the following questions with a "yes" or "no". It\'s okay to write "y" or "n".');
console.log ('Hello World!');

//ask user name
var user = prompt ('What is your name?');
console.log = ('The user\'s name is ' + user);

//first question using if/else

var guessHometown = prompt('Was I born in Germany?').toLowerCase();

if (guessHometown === 'no' || guessHometown === 'n') {
  alert('Richtig! That\'s correct in German! I was born in Seoul, Korea.');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;

} else {
  alert('Falsch! That is incorrect in German! I was born in Seoul, Korea.');
  console.log('Answer is incorrect! Your score remains the same.');
}

// console.log('Current score: ' + userPoints);


// second question using if else

var guessDiving = prompt('Did I go snuba diving?').toLowerCase();

if (guessDiving === 'yes' || guessDiving === 'y') {
  alert('Pololei! That\'s correct in Hawaiian! I went snuba diving off Molikini Island, Hawaii!');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;

} else  {
  alert('Pololei Ole! That\'s incorrect in Hawaiian! I went snuba diving off Molikini Island, Hawaii!');
  console.log('Answer is incorrect! Score remains the same.');

} 
    
console.log('Current score: ' + userPoints);

// third question using if/else
      
var guessPetDog = prompt('Do I have a pet dog?').toLowerCase();

if (guessPetDog === 'yes' || guessPetDog === 'y') {
  alert('Grrrrrr! That\'s incorrect in Dog! I don\'t have a pet dog, yet.');
  console.log('Answer is incorrect! Score remains the same.');


} else  {
  alert('WoofWoof! That\'s correct in Dog! I don\'t have a pet dog, yet.');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;


}
      
console.log('Current score: ' + userPoints)

// fourth question using if/else

var guessCatAllergy = prompt('Am I allergic to cats?').toLowerCase();

if (guessCatAllergy === 'yes' || guessCatAllergy === 'y') {
  alert(' HiSs HiSs! That\'s incorrect in Feline. I love Garfield!');
  console.log('Answer is incorrect! Score remains the same.');

} else  {
  alert('Purrrrrrrrrr! That\'s correct in Feline. I love Garfield!');
  console.log('Answer is correct. Tallying score variable..');
  userPoints++;


}
        
console.log('Current score: ' + userPoints);

// fifth question using if/else


var guessChickenPox = prompt('Did I get chicken pox twice in one year?').toLowerCase();

if (guessChickenPox === 'yes' || guessChickenPox === 'y') {
  alert('Itchy! Itchy! That is correct! I\'ve had chicken pox twice in elementary school. ');
  console.log('Answer is correct. Tallying score variable.');
  userPoints++;


} else  {
  alert('Pucock! That is incorrect in Chicken! I\'ve had chicken pox twice in elementary school.');
  console.log('Answer is incorrect! Score remains the same.');


}

console.log('Current score: ' + userPoints);

// Tallying total
alert('Thank you for visiting my page! Your final score: ' + userPoints + ' See you later!');
console.log('Player earned a final score of ' + userPoints + ' out of 5.' + 'This concludes the JavaScript portion.');