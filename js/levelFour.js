// Using the strict mode to avoid any potential issues
'use strict';

// Importing the level class from game.js
import { level } from './game.js';

// Array that consists of images that will be used in Level 4.
const levelFourRobots = [
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
  'Robot17.png',
  'Robot18.png',
  'Robot19.png',
];

// Creating an object and passing in the values to be used by the level class in game.js.
const levelFour = new level(
  4,
  levelFourRobots,
  '90px',
  '90px',
  195,
  24,
  './level_five.php'
);

// Calling the methods to display the level number, score, and lives left.
levelFour.displayLevel();
levelFour.displayScore();
levelFour.displayLives();

/* Creating robot objects and randomizing them so that whenever the page
refreshes, the position of the robots will be random. */
const levelFourRobotObjects = levelFour.generatingRobots();
levelFour.randomizeCards(levelFourRobotObjects);

// Giving the user some time before displaying the cards in the game window.
setTimeout(function () {
  levelFour.startLevel(levelFourRobotObjects);
}, 2000);
