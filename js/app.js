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
console.log ('The user\'s name is ' + user);

//first question using if/else adding while loop

var correctAnswer=false;
while (correctAnswer===false){

  var guessHometown = prompt('Was I born in Germany?').toLowerCase();

  if (guessHometown === 'no' || guessHometown === 'n') {
    alert('Richtig! That\'s correct in German! I was born in Seoul, Korea.');
    console.log('Answer is correct. Tallying score variable.');
    correctAnswer = true;
    userPoints++;

  } else if(guessHometown === 'yes' || guessHometown === 'y'){
    alert('Falsch! That is incorrect in German! I was born in Seoul, Korea.');
    console.log('Answer is incorrect! Your score remains the same.');
    correctAnswer = true;
  }else{
    alert('Your input was not valid. Please type in the correct reponse');
    console.log('correctAnswer remains false; therefore, the while loop will repeat the question');
  }
}
console.log('Current score: ' + userPoints);


// second question using if else adding while loop
correctAnswer = false;
while (correctAnswer === false) {

  var guessDiving = prompt('Did I go snuba diving?').toLowerCase();

  if (guessDiving === 'yes' || guessDiving === 'y') {
    alert('Pololei! That\'s correct in Hawaiian! I went snuba diving off Molikini Island, Hawaii!');
    console.log('Answer is correct. Tallying score variable.');
    correctAnswer = true;
    userPoints++;

  } else if(guessDiving === 'no' || guessDiving === 'n') {
    alert('Pololei Ole! That\'s incorrect in Hawaiian! I went snuba diving off Molikini Island, Hawaii!');
    console.log('Answer is incorrect! Score remains the same.');
    correctAnswer = true;

  } else {
    alert('Your input was not valid. Please type in the correct reponse');
    console.log('correctAnswer remains false; therefore, the while loop will repeat the question');
  }

} 
    
console.log('Current score: ' + userPoints);

// third question using if/else adding while loop
correctAnswer = false;
while (correctAnswer === false) {
      
  var guessPetDog = prompt('Do I have a pet dog?').toLowerCase();

  if (guessPetDog === 'yes' || guessPetDog === 'y') {
    alert('Grrrrrr! That\'s incorrect in Dog! I don\'t have a pet dog, yet.');
    console.log('Answer is incorrect! Score remains the same.');
    correctAnswer = true;

  } else if(guessPetDog === 'no' || guessPetDog === 'n') {
    alert('WoofWoof! That\'s correct in Dog! I don\'t have a pet dog, yet.');
    console.log('Answer is correct. Tallying score variable.');
    correctAnswer = true;
    userPoints++;
    
  } else {
    alert('Your input was not valid. Please type in the correct reponse');
    console.log('correctAnswer remains false; therefore, the while loop will repeat the question');
  }

} 
    
console.log('Current score: ' + userPoints);
      
// fourth question using if/else adding while loop
correctAnswer = false;
while (correctAnswer === false) {

  var guessCatAllergy = prompt('Am I allergic to cats?').toLowerCase();

  if (guessCatAllergy === 'yes' || guessCatAllergy === 'y') {
    alert(' HiSs HiSs! That\'s incorrect in Feline. I love Garfield!');
    console.log('Answer is incorrect! Score remains the same.');
    correctAnswer = true;

  } else if(guessCatAllergy === 'no' || guessCatAllergy === 'n') {
    alert('Purrrrrrrrrr! That\'s correct in Feline. I love Garfield!');
    console.log('Answer is correct. Tallying score variable..');
    correctAnswer = true;
    userPoints++;

  } else {
    alert('Your input was not valid. Please type in the correct reponse');
    console.log('correctAnswer remains false; therefore, the while loop will repeat the question');
  }

}
        
console.log('Current score: ' + userPoints);

// fifth question using if/else adding while loop
correctAnswer = false;
while (correctAnswer === false) {

  var guessChickenPox = prompt('Did I get chicken pox twice in one year?').toLowerCase();

  if (guessChickenPox === 'yes' || guessChickenPox === 'y') {
    alert('Itchy! Itchy! That is correct! I\'ve had chicken pox twice in elementary school. ');
    console.log('Answer is correct. Tallying score variable.');
    correctAnswer = true;
    userPoints++;


  } else if(guessChickenPox === 'no' || guessChickenPox === 'n') {
    alert('Pucock! That is incorrect in Chicken! I\'ve had chicken pox twice in elementary school.');
    console.log('Answer is incorrect! Score remains the same.');
    correctAnswer = true;

  } else {
    alert('Your input was not valid. Please type in the correct reponse');
    console.log('correctAnswer remains false; therefore, the while loop will repeat the question');
  }

}

console.log('Current score: ' + userPoints);

// added sixth question using if/else/while loop

correctAnswer = false;
for (var i = 0; i < 4 && (correctAnswer === false); i++) {

  var guessTotalCousins = prompt('How many of my cousins do you think live in Washington state currently? (please enter an integer number only: i.e. 0, 100) You have ' + (4 - i) + ' attempt(s) remaining for this question.');
  
  while (isNaN(guessTotalCousins))
    guessTotalCousins = prompt ('Invalid input. We will give you a chance to input an integer before docking attempts. How many of my cousins do you think live in Washington state currently (enter an integer number only: i.e. 0, 100) You have ' + (4 - i) + ' attempt(s) remaining for this question.');
}
var intGuessTotalCousins = parseInt(guessTotalCousins);
console.log('User input: ' + guessTotalCousins);

if (intGuessTotalCousins < 0) {
  alert('Sorry, but that\'s not how the world works. You can\'t have less than 0 cousins!');
  console.log('Answer is incorrect. Loop will continue.');

} else if (intGuessTotalCousins === 1) {
  alert('That is incorrect! Your guess is too low.');
  console.log('Answer is incorrect. Loop will continue.');

} else if (intGuessTotalCousins > 2) {
  alert('That is incorrect! Your guess is too high.');
  console.log('Answer is incorrect. Loop will continue.');

} else if (intGuessTotalCousins === 2) {
  alert('That is correct! I have 2 (two) cousins living in Washington.');
  console.log('Answer is correct. Incrementing score variable and exit loop.');
  correctAnswer = true;

  console.log(correctAnswer);
  userPoints++;
}

console.log('Current score: ' + userPoints);

// added seventh question using if/else/while loop and array

correctAnswer = false;
var visitedStates = ['Oregon', 'California', 'Nevada', 'New York', 'South Carolina', 'Florida", 'Hawaii'];

//creating a new array and then turning each element to lower case.  The lower case names are then pushed into the array.  

var lowerCaseVisitedStates = {};
  for (i = 0; i < visitedStates.length; i++) {
  lowerCaseVisitedStates.push(visitedStates[i].toLowerCase());
}

  console.log(lowerCaseVisitedStates);
  for (var i = 0; i < 6 && (correctAnswer === false); i++) {
  var guessVisitedState = prompt('Can you guess a state that I have lived in besides Washington and Alaska? You have ' + (6 - i) + ' attempt(s) remaining for this question.');
  var lowerCaseGuessVisitedState = guessVisitedState.toLowerCase();
  console.log(lowerCaseGuessVisitedState);
  var guessInt = lowerCaseVisitedStates.indexOf(lowerCaseGuessVisitedState);
  console.log(guessInt);
  if (guessInt === -1) {
    alert('That was incorrect. Please try again!"');
  }
  else if (guessInt > -1) {
    alert('That was correct! Possible answers were the following: ' + visitedStates.join(', ') + '.');
    correctAnswer = true;
    userPoints++;
  }
}
console.log(userPoints);





// Tallying total
alert('Thank you for visiting my page! Your final score: ' + userPoints + ' See you later!');
console.log('Player earned a final score of ' + userPoints + ' out of 5.' + 'This concludes the JavaScript portion.');