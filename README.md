# Frontend Mentor - Calculator app

![Design preview for the Calculator app coding challenge](https://github.com/79rubart/calculator-app/blob/master/assets/images/calculator.PNG)

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Referred Assets](#useful-resources)
- [Author](#author)

## Overview

This is a calculator app made with pure JS, HTML, CSS languages. No frameworks were used during the development of this project.

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference 

### Links

- Deploy: [Vercel link](https://calculator-app-79rubart.vercel.app/)

## My process

I started by building some rough HTML structure and adding some initial CSS. Then, I added a JS file and started working with an array to get all the buttons and their values and print them on the text inputs, using the "array.prototype.forEach.call()" function.

For the OPERATORS, I created variables representing both numbers for the future operations and the variables for the signs, then proceeded to create anonymous functions inside the event listeners for each operator button.

For the "=" button, I created an event listener with conditionals inside, each one designating a function for every operator. The "=" button also nulifies the second text input containing the values transferred from the first input after the user presses the operation button.

The DEL and RESET contains functions made for deleting the latest character and deleting all the characters respectively.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Pure JS
- Flexbox
- CSS Grid

## Referred Assets
The task was to build out the project to the designs inside the /design folder. There is both a mobile and a desktop version of the design.

All the required assets for the challenge are in the ./assets/images folder.

## Author

- Linkedin: https://www.linkedin.com/in/dev-rubensoliveira/
- Github: https://github.com/79rubart

