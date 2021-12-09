<?php
  // Importing the file, base.php, in order to call the functions in it. 
  include('base.php');

  /* Passing the title as a parameter to the function for it to be displayed
  as the title of the page.*/
  displayHeader('Memorybot');
?> 

<!-- External CSS specifically for the styles of index.php -->
<link rel="stylesheet" href="./css/index.css">

<?php
  // Closes the <head> element with the closing tag.
  closingHeader();

  /* Upon calling this function, a div element with a class of container will
  be created that will apply a width and center the whole page*/
  centeringPageOpen();

  /* Passing the page name as the parameter to apply a special style to
  indicate that the user is currently on this page.*/
  displayNavigation("Home");
?>

<!-- HTML content for the "Home" page -->
<!-- WELCOME SECTION -->
<section id="welcome-section" class="center">
    <h1>Welcome To Memorybot</h1>
    <h3 class="tagline">
        An interactive memory game where the robots have to be matched
        within the given lives.
    </h3>
</section>

<!-- HERO SECTION -->
<section id="hero-section">
    <!-- Continer that holds all the eight cards -->
    <div class="hero-img-container">
        <!-- Individual Card -->
        <div>
            <img src="./img/1.png" alt="Image of an animated robot" />
        </div>
        <div>
            <img src="./img/2.png" alt="Image of an animated robot" />
        </div>
        <div>
            <img src="./img/3.png" alt="Image of an animated robot" />
        </div>
        <div>
            <img src="./img/4.png" alt="Image of an animated robot" />
        </div>
        <div>
            <img src="./img/5.png" alt="Image of an animated robot" />
        </div>
        <div>
            <img src="./img/6.png" alt="Image of an animated robot" />
        </div>
        <div>
            <img src="./img/7.png" alt="Image of an animated robot" />
        </div>
        <div>
            <img src="./img/8.png" alt="Image of an animated robot" />
        </div>
    </div>
</section>

<!-- GAME INSTRUCTIONS SECTION -->
<section id="game-instructions">
    <div class="section-header center">
        <h2>Game Instructions</h2>
        <h3 class="tagline">Learn to play Memorybot in just 3 simple steps!</h3>
    </div>
    <div class="instruction">
        <div class="step-heading">
            <h2>01</h2>
        </div>
        <div class="step-content">
            <p>
                Initially, the cards holding the images of the robots will be 
                empty, and it is your job to match the robots that look alike. 
                Each successful match will award you with <strong>five</strong> 
                points. You must match all the robots to progress to the next 
                level before you run out of <strong>lives</strong>.
            </p>
        </div>
    </div>
    <!-- The reverse classes reverses the direction -->
    <div class="instruction reverse">
        <div class="step-heading">
            <h2>02</h2>
        </div>
        <div class="step-content">
            <p>
                You heard that right, there are a limited number of lives to add some pressure
                on you! The game has <strong>five</strong> levels in total, 
                and the first level has <strong>twenty</strong> cards. Each level 
                gets more challenging as <strong>six</strong> additional cards are 
                introduced. You can quit the game whenever you wish to do so. 
            </p>
        </div>
    </div>
    <div class="instruction">
        <div class="step-heading">
            <h2>03</h2>
        </div>
        <div class="step-content">
            <p>
                You can play the game as a guest, but the perks of being a
                registered user is that your score will automatically be entered
                into the <strong>leaderboard</strong>. This way, you will know 
                where you stand among other players who have played Memorybot 
                in the past and also compete against your friends.
            </p>
        </div>
    </div>
</section>

<!-- CALL-TO-ACTION SECTION -->
<section id="cta" class="center">
    <h2>Are You Ready To Test Your Memory? 🤔</h2>
    <a href="level_one.php" class="cta-btn">Play Now!</a>
</section>

<!-- This JS file is specific to the home page -->
<script src="./js/index.js" type="module"></script>

<?php
    /* This function adds a closing ("</div>") div tag to end the centering
    of the page.*/
    centeringPageClose();

    /* As the function's name implies, calling this funcion will display
    copyright information that is present in the <footer> element.*/
    displayFooter();

    // Closes the body and adds the closing html tag.
    closeBody();
?>