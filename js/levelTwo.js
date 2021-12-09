// Using the strict mode to avoid any potential issues
'use strict';

// Importing the level class from game.js
import { level } from './game.js';

// Array that consists of images that will be used in Level 2.
const levelTwoRobots = [
  'Robot1.png',
  'Robot2.png',
  'Robot3.png',
  'Robot4.png',
  'Robot5.png',
  'Robot6.png',
  'Robot7.png',
  'Robot8.png',
  'Robot9.png',
  'Robot10.png',
  'Robot11.png',
  'Robot12.png',
  'Robot13.png',
];

// Creating an object and passing in the values to be used by the level class in game.js.
const levelTwo = new level(
  2,
  levelTwoRobots,
  '105px',
  '105px',
  50,
  15,
  './level_three.php'
);

// Calling the methods to display the level number, score, and lives left.
levelTwo.displayLevel();
levelTwo.displayScore();
levelTwo.displayLives();

/* Creating robot objects and randomizing them so that whenever the page
refreshes, the position of the robots will be random. */
const levelTwoRobotObjects = levelTwo.generatingRobots();
levelTwo.randomizeCards(levelTwoRobotObjects);

// Giving the user some time before displaying the cards in the game window.
setTimeout(function () {
  levelTwo.startLevel(levelTwoRobotObjects);
}, 2000);
