<?php
  // Importing the file, base.php, in order to call the functions in it. 
  include('base.php');

  /* Passing the title as a parameter to the function for it to be displayed
  as the title of the page.*/
  displayHeader('Memorybot | Game');
?> 

<!-- External CSS specifically for the styles of game.php -->
<link rel="stylesheet" href="./css/game.css">

<?php
  // Closes the <head> element with the closing tag.
  closingHeader();

  /* Upon calling this function, a div element with a class of container will
  be created that will apply a width and center the whole page*/
  centeringPageOpen();

  /* Passing the page name as the parameter to apply a special style to
  indicate that the user is currently on this page.*/
  displayNavigation("Game");
?> 

<?php
  /* This function displays the game window and a javascript file, which is
  specific to that level of the game should be passed in as the parameter. */
  displayGameWindow("levelOne.js");
?>

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