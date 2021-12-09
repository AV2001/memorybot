// Using the strict mode to avoid any potential issues
'use strict';

// Importing the level class from game.js
import { level } from './game.js';

// Array that consists of images that will be used in Level 3.
const levelThreeRobots = [
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
  'Robot14.png',
  'Robot15.png',
  'Robot16.png',
];

// Creating an object and passing in the values to be used by the level class in game.js.
const levelThree = new level(
  3,
  levelThreeRobots,
  '100px',
  '100px',
  115,
  20,
  './level_four.php'
);

// Calling the methods to display the level number, score, and lives left.
levelThree.displayLevel();
levelThree.displayScore();
levelThree.displayLives();

/* Creating robot objects and randomizing them so that whenever the page
refreshes, the position of the robots will be random. */
const levelThreeRobotObjects = levelThree.generatingRobots();
levelThree.randomizeCards(levelThreeRobotObjects);

// Giving the user some time before displaying the cards in the game window.
setTimeout(function () {
  levelThree.startLevel(levelThreeRobotObjects);
}, 2000);
