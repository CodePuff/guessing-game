'use strict';

var userPoints = 0;
//pseudo code below
//check if the user's answer is correct
//what is correct?
//find out what the answer is
//toLowerCase or toUpperCase
//use a confirm box?

//greetings
alert ('Welcome to my guessing game!');
console.log ('Hello World!');

//ask user name
var user = prompt ('What is your name?');
console.log = ('The user\'s name is ' + user);

//intro to game
alert ('Hi ' + user + '! There are 5 \'yes\' or \'no\' questions about me.  Can you guess all 5 right? ');

var answer = prompt ('Is Rachel\'s favorite food kimchi?' , 'type yes or no').toLowerCase();

console.log (answer);

if (answer === 'yes' || answer === 'y') {
  //if it's correct, give them a point.
  userPoints++;
} else {
  //if it's not correct, tell them to keep trying
  alert ('Nope! I love all spicy food. All SPICY FOOD.');
}

alert ('you have ' + userPoints + ' points');