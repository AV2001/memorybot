// Using the strict mode to avoid any potential issues
'use strict';

// Importing the level class from game.js
import { level } from './game.js';

// Array that consists of images that will be used in Level 1.
const levelOneRobots = [
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
];

// Creating an object and passing in the values to be used by the level class in game.js.
const levelOne = new level(
  1,
  levelOneRobots,
  '120px',
  '120px',
  0,
  10,
  './level_two.php'
);

// Calling the methods to display the level number, score, and lives left.
levelOne.displayLevel();
levelOne.displayScore();
levelOne.displayLives();

/* Creating robot objects and randomizing them so that whenever the page
refreshes, the position of the robots will be random. */
const levelOneRobotObjects = levelOne.generatingRobots();
levelOne.randomizeCards(levelOneRobotObjects);

// Giving the user some time before displaying the cards in the game window.
setTimeout(function () {
  levelOne.startLevel(levelOneRobotObjects);
}, 2000);
