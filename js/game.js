// Using the strict mode to avoid any potential issues
'use strict';

// Accessing all the elements in game.php by their id.
// "MY ACCOUNT" NAVIGATION LINK
export const myAccount = document.getElementsByClassName('nav-link')[3];

// GAME WINDOW
const cardsContainer = document.getElementById('cards-container');
const levelNumber = document.getElementById('level');
const playerName = document.getElementById('player-name');
let lives = document.getElementById('lives');
let score = document.getElementById('score');
let previousHighScoreBox = document.getElementById('previous-high-score-box');
let previousHighScore = document.getElementById('previous-high-score');
const gameOver = document.getElementById('game-over');

// Boolean variable to check whether user is logged in or not.
let userLoggedIn = false;

// Checks whether the user is logged in.
const loggedInUser = () => {
  return JSON.parse(sessionStorage.getItem(sessionStorage.key(0)));
};

/* Since a session can only hold one user, checking whether the length of 
the session storage is greater than 0 tells that the user is indeed logged in */
const isUserLoggedIn = () => {
  if (sessionStorage.length > 0) {
    userLoggedIn = true;
    const user = loggedInUser();

    // Checking if the playerName exists on the DOM before changing its textContent.
    if (playerName) {
      playerName.textContent = user.userFullName;
    }
    // The "My Account" navigation link changes to "Logout" when the user is logged in.
    myAccount.textContent = 'Logout';
    // When the logout link is clicked, the user will be redirected to the home page.
    myAccount.setAttribute('href', './index.php');
  } else {
    if (playerName) {
      playerName.textContent = 'Guest';
    }
  }
};

isUserLoggedIn();

/* When the "My Acocunt" link with the text "Logout" is clicked, the current 
user is removed from the session storage so that a new user can log in. */
myAccount.addEventListener('click', function () {
  // Removing the current logged in user from the session storage.
  sessionStorage.removeItem(sessionStorage.key(0));
  // Changing the text back to "My Account"
  myAccount.textContent = 'My Account';
});

// Keeping track of the total score accumulated.
let totalScore = 0;

// Level Class - All the five levels will use this as a blueprint.
export class level {
  constructor(
    levelNumber,
    arrayOfImages,
    height,
    width,
    points,
    lives,
    redirect
  ) {
    this.levelNumber = levelNumber;
    this.arrayOfImages = arrayOfImages;

    // The height and width of the images and the cards.
    this.height = height;
    this.width = width;

    this.points = points;
    this.livesLeft = lives;

    /* The path that the user will be taken to when the level is successfully
    completed. */
    this.redirect = redirect;

    this.arrayLength = this.generatingRobots().length;

    // Getting the logged-in user's data from local storage and storing it.
    this.userObject = getFromLocalStorage(sessionStorage.key(0));
  }
  displayLevel() {
    levelNumber.textContent = this.levelNumber;
  }
  displayScore() {
    score.textContent = this.points;
  }
  displayLives() {
    lives.textContent = this.livesLeft;
  }
  nextLevel() {
    self.location = this.redirect;
  }
  // Generates an array of robot objects where two identical object are created.
  generatingRobots() {
    let robotObjects = [];
    for (let i = 0; i < this.arrayOfImages.length; i++) {
      robotObjects.push({ id: i, fileName: this.arrayOfImages[i] });
      robotObjects.push({ id: i, fileName: this.arrayOfImages[i] });
    }
    return robotObjects;
  }
  // Function that randomizes the array of objects.
  randomizeCards(data) {
    return data.sort(() => 0.5 - Math.random());
  }
  // Function for checking matching cards.
  matchingCards(event) {
    const clickedCard = event.target;
    clickedCard.classList.add('clicked');
    const clickedCards = document.querySelectorAll('.clicked');
    if (clickedCards.length === 2) {
      if (
        clickedCards[0].getAttribute('name') ===
        clickedCards[1].getAttribute('name')
      ) {
        // Decreasing the length of array whenever two cards are matched.
        this.arrayLength -= 2;
        // Every successful match will yield 5 points.
        this.points += 5;
        // Score will be set to the points.
        score.textContent = this.points;
        // Removing the "clicked" class so that a new pair of cards can be selected.
        clickedCards.forEach((card) => {
          card.classList.remove('clicked');
        });

        if (this.arrayLength === 0) {
          totalScore = this.points;
          this.arrayLength--;
          /* Only update the score if the current score is greater than the 
          max score in the local storage. */
          if (userLoggedIn && totalScore > this.userObject.maxScore) {
            this.userObject.maxScore = totalScore;
            sendToLocalStorage(this.userObject);
          }
          // Once the level is over, move on to the next one.
          this.nextLevel();
        }
      } else {
        // Removing the "clicked" class so that a new pair of cards can be selected.
        clickedCards.forEach((card) => {
          setTimeout(function () {
            card.classList.remove('clicked');
            card.style.pointerEvents = 'auto';
            card.classList.add('hide');
          }, 400);
        });
        this.livesLeft--;
        lives.textContent = this.livesLeft;
        if (this.livesLeft === 0) {
          totalScore = this.points;
          setTimeout(function () {
            gameOver.classList.toggle('hidden');
          }, 1000);

          /* Only update the score if the current score is greater than the 
          max score in the local storage. */
          if (userLoggedIn && totalScore > this.userObject.maxScore) {
            this.userObject.maxScore = totalScore;
            sendToLocalStorage(this.userObject);
          }
          setTimeout(function () {
            location.href = './leaderboard.php';
          }, 3000);
        }
      }
    }
  }
  // Function for styling each robot's card and adding it to the container.
  startLevel(objects) {
    /* Checking whether the user is logged in and the max score greater than 0. If that's the case then display the max score that exists in the local storage from game that was played previously. */
    if (userLoggedIn && this.userObject.maxScore > 0) {
      previousHighScoreBox.classList.toggle('hidden');
      previousHighScore.textContent = this.userObject.maxScore;
      /* If max score is greater than 395, then it is assumed that the user has completed all the levels. So, there's no point in showing the previous max score. */
    } else if (userLoggedIn && this.userObject.maxScore > 395) {
      previousHighScoreBox.classList.add('hidden');
    }

    objects.forEach((object) => {
      const robotCard = document.createElement('div');
      robotCard.style.height = this.height;
      robotCard.style.height = this.width;
      robotCard.className = 'robot-card';
      robotCard.style.cursor = 'pointer';

      // Creating an image for each robot.
      const robotImage = document.createElement('img');
      robotImage.style.cursor = 'pointer';
      robotImage.style.height = '100%';

      // Preventing the cards from being clicked when showing them.
      robotImage.style.pointerEvents = 'none';
      // Shows the cards for 3 seconds and then disappears.
      setTimeout(function () {
        robotImage.classList.toggle('hide');
        // Enabling clicks only after cards are disappeared
        robotImage.style.pointerEvents = 'auto';
      }, 3000);

      // Source of the image will be the image fileName property of each object.
      robotImage.setAttribute('src', `./img/${object.fileName}`);
      robotImage.setAttribute('name', object.id);
      // Adding the div element to the grid container
      cardsContainer.appendChild(robotCard);
      robotCard.appendChild(robotImage);

      robotImage.addEventListener('click', (event) => {
        robotImage.classList.toggle('hide');
        /* Removing the pointer event for the clicked card so that the user 
        does not accidentally see the card and then hide it. */
        robotImage.style.pointerEvents = 'none';
        this.matchingCards(event);
      });
    });
  }
}
