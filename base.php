<?php

/* Adds the meta tags and displays the title of the page, and adds the general 
stylesheet to the page. */
function displayHeader($pageTitle) {
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<meta charset="UTF-8">';
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<title>' . $pageTitle . '</title>';
    echo '<!-- Getting the fonts from Google fonts -->';
    echo '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"/>';
    echo '<link rel="stylesheet" href="./css/styles.css" />';    
}  

/* This function is called after each page links to a css stylesheet that is
specific to its own styles. */
function closingHeader() {
    echo '</head>';
}

// Responsible for centering the page
function centeringPageOpen() {
    echo '<div class="container">';
}

/* All the content that wants to be centered will be between the 
centeringPageOpen and centeringPageClose function calls. */
function centeringPageClose() {
    echo '</div>';
}

/* Since navigation is common amongst all the pages on the website, this 
function takes a parameter to check if this is the page that the user is on,
and according to that it adds an id with the name "current", which adds 
special css styles to illiustrate that visually. */

function displayNavigation($pageName) {
    echo '<header>';
    echo '<a href="index.php">';
    echo '<img src="./img/logo.png" alt="Website Logo" class="logo" />';
    echo '</a>';
    echo '<nav>';
    echo '<ul class="main-nav">';

    $navLinks = array('Home', 'Game', 'Leaderboard', 'My Account');
    $navLinkPaths = array('index.php', 'level_one.php', 'leaderboard.php', 'my_account.php');

    for($i = 0; $i < count($navLinks); $i++) {
        echo '<li><a class="nav-link" ';
        if($navLinks[$i] == $pageName) {
            echo 'id="current" ';
        }
        echo 'href="' . $navLinkPaths[$i] . '">' . $navLinks[$i] . '</a></li>';
    }
    echo '</ul>';
    echo '</nav>';
    echo '</header>';
}

// Displays the game window - all the five levels in the game will have this.
function displayGameWindow($scriptFile) {
    echo '<h1 id="main-heading"class="center">Memorybot</h1>';
    echo '<section id="game-window">';
    echo '<header>';
    echo '<div id="level-and-player">';
    echo '<h3 id="level-box">Level ';
    echo '<span id="level"></span>';
    echo '</h3>';
    echo '<h3 id="player-box">';
    echo '<svg xmlns="http://www.w3.org/2000/svg" class="user-icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />';
    echo '</svg> <span id="player-name"></span>';
    echo '</h3>';
    echo '</div>';
    echo '<h3 id="lives-box">Lives Left &DoubleRightArrow; <span id="lives"></span></h3>';
    echo '<div id="score-container">';
    echo '<h3 id="score-box">Score = ';
    echo '<span id="score">0</span>';
    echo '</h3>';
    echo '<h3 id="previous-high-score-box" class="hidden">Previous High = ';
    echo '<span id="previous-high-score">0</span>';
    echo '</h3>';
    echo '</div>';
    echo '</header>';
    echo '<div id="cards-container">';
    echo '</div>';
    echo '<div id="game-over" class="hidden">';
    echo '<h1>Game Over!</h1>';
    echo '</div>';
    echo '</div>';
    echo '</section>';
    echo '<script src="./js/myAccount.js"></script>';
    echo '<script src="./js/' . $scriptFile . '" type="module"></script>';
}

// Footer Information
function displayFooter() {
    echo '<footer>';
    echo '<p style="font-size: 1.8rem; text-align: center">';
    echo 'Copyrights &copy; 2021 Memorybot';
    echo '</p>';
    echo '</footer>';            
}

// Closing tags to indicate the end of content on each page.
function closeBody() {
    echo '</body>';
    echo '</html>';
}

?>