
# guessing-game
Code Fellows 201n11 About Me Lab 2.  

## Purpose

- The assignment will be to create an "About Me" HTML Project using Javascript and CSS.

- Note that as we progress through the week, new user stories will be added to the "About Me" project to guide the development of new features.


## User Stories for "About Me" (MVP)

("MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals.")

This is our first exposure to user stories. This is a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view.

User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

- As a student, I want to create an About Me page as a demonstration of my skills with HTML.
- As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
- As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.
- As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
- As a developer, I want to use markup to structure my index.html page, so the layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
- As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
- As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user.
- As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
- As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
- As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
- As a developer, I want to be able to debug my code by using well structured console messages.
- As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.

##Additional User Stories as of 5/10/18

- As a developer, I want to use thoughtful and descriptive console.log() throughout my code to help test my work and assist with debugging.
- As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or my work experience.
- As a developer, I want to consider the user experience (UX) of my About Me and guessing game, trying to view it through the eyes of a user. Wait... maybe I should just write a user story for that...
- As an end user of the About Me and guessing game, I want to have an informative, interesting, and fun experience in learning about the developer.
- As a prospective job seeker, I want to consider adopting additional features that I have seen in the 'About Me' projects made by others, so that my 'About Me' can become more thorough and interesting than my original conception.
- As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
- As a prospective job seeker, I was to use CSS to creatively and tastefully style and layout my page.
- As a prospective job seeker, I want to have five yes/no questions in my "about me" guessing game so that I have enough questions to cover a variety of things about me.
- As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch this week?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
- As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
- As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

### User Stories (Stretch goals... not required!) added 05/10/18

- As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions in my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question.
- Make the number-guessing question use a random number as its correct answer.
- Move the guessing game to a separate HTML file, list the questions on the page, and then have the answers fill in on the page after the user provides the answers.

## Technical Requirements for "About Me"

- Follow the instructions in the adjacent ["Setting Up a New Code 201 Project"](./setting-up-a-new-project.md) document
- HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.
- Your JS file contains a 'use strict' declaration at the top. Always.
- Design a guessing game about you that involves **FIVE** yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
- The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either `.toUpperCase()` or `.toLowerCase()` used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
- Useful and descriptive `console.log()` messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
- Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
- Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

## Additional Technical Requirements for "About Me" added 05/10/18

- Per the user stories, you will need to include in your HTML at least one each of an ordered and an unordered list.
- Use `prompt`for input and `alert` for output to the user, unless you are working on the third Stretch Goal.
- Do not write any functions in your JavaScript.
- Expect that you will probably need both 'for' and 'while' structures for your sixth and seventh questions. But not necessarily.

### Build status

-050818 Version 1.0.0 
  -Updated scaffolding directory. 

-051018 Version 1.1.0 
  -added while loops and additional questions 6 & 7.

-051218 Version 1.2.0
  -added function() 
  -Pair programming work: Harry Hayden - Navigator | Shalon Baker | Driver

### Tech/Framework 

- Visual Studio Code (Version 1.23.0) 
- HTML5


### Features

What makes the project stand out?

### Tests

?

### Credits

-Kudos out to Coach Burke and the TA's Tim and Shamarke! 
-.eslintrc.json provided by class
-.gitignore updated by Shamarke
-reset.css provided by http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126

### Helpful Links

[VS Code](www.visualstudio.com) , 
[Code Fellows](https://www.codefellows.org/)


### License/Author
MIT © [CodePuff](2018)
The author of this page is HRHayden, an introductory student at Code Fellows Coding Academy, Seattle, WA.

