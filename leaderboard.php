<?php
  // Importing the file, base.php, in order to call the functions in it. 
  include('base.php');

  /* Passing the title as a parameter to the function for it to be displayed
  as the title of the page.*/
  displayHeader('Memorybot | Leaderboard');
?> 

<!-- External CSS specifically for the styles of leaderboard.php -->
<link rel="stylesheet" href="./css/leaderboard.css">

<?php
  // Closes the <head> element with the closing tag.
  closingHeader();

  /* Upon calling this function, a div element with a class of container will
  be created that will apply a width and center the whole page*/
  centeringPageOpen();

  /* Passing the page name as the parameter to apply a special style to
  indicate that the user is currently on this page.*/
  displayNavigation("Leaderboard");
?>

<!-- HTML content for the "Leaderboard" page -->
<h1 class="center">Leaderboard</h1>
<p class="info">*Only the scores of registered users will be added to the leaderboard.</p>
<table id="leaderboard-table">
  <!-- Table Header -->
  <thead>
    <tr>
      <!-- The three columns that indicate the type of data to be displayed. -->
      <th>Rank</th>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
</table>  

<!-- This JS file is specific to the leaderboard page -->
<script src="./js/leaderboard.js" type="module"></script>

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