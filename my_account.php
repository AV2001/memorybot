<?php
  // Importing the file, base.php, in order to call the functions in it. 
  include('base.php');

  /* Passing the title as a parameter to the function for it to be displayed
  as the title of the page.*/
  displayHeader('Memorybot | My Account');
?> 

<!-- External CSS specifically for the styles of my-account.php -->
<link rel="stylesheet" href="./css/my-account.css">

<?php
  // Closes the <head> element with the closing tag.
  closingHeader();

  /* Upon calling this function, a div element with a class of container will
  be created that will apply a width and center the whole page*/
  centeringPageOpen();

  /* Passing the page name as the parameter to apply a special style to
  indicate that the user is currently on this page.*/
  displayNavigation("My Account");
?>  

<!-- HTML content for the "My Account" page -->
<!-- Using a div to center the content. -->
<div class="center">
  <h1 class="">My Account</h1>
  <p class="info">
    *Sign-up if you would like to create a new account,<br> 
    otherwise Log-in using your existing credentials.
  </p>
</div>
<section id="form">
  <!-- form-menus is container that is used as a flex container to create a 
  horizonal side-by-side layout for the children elements.-->
  <div class="form-menus">
    <button class="form-menu-btn active" id="sign-up-menu-btn">Sign Up</button>
    <!-- When the log-in button is clicked, a log-in form will be displayed 
    whereas the sign-up form will be hidden from view. -->
    <button class="form-menu-btn" id="log-in-menu-btn">Log In</button>
  </div>
  <hr>

  <!-- Sign Up Form -->
  <form action="#" id="sign-up-form" onsubmit="return false">
      <!-- Clicking on the label will allow the user to enter data
      into the input box. <label> is connected to <input> -->
      <label for="first-name">First Name</label>
      <input type="text" name="first-name" id="first-name" required>

      <label for="last-name">Last Name</label>
      <input type="text" name="last-name" id="last-name" required>

      <label for="sign-up-email">Email</label>
      <input type="email" name="sign-up-email" id="sign-up-email" required>

      <label for="dob">Date of Birth</label>
      <input type="date" name="dob" id="dob" required>

      <div id="gender-container">
        <p>Gender</p>
        <div>
          <!-- MALE -->
          <div>
            <input type="radio" name="gender" id="male" value="male" required>
            <label for="male">Male</label>
          </div>

          <!-- FEMALE -->
          <div>
            <input type="radio" name="gender" id="female" value="female" required>
            <label for="female">Female</label>
          </div>
        </div>  
      </div>
      
      <label for="sign-up-password">Password (8 characters min)</label>
      <input type="password" name="sign-up-password" id="sign-up-password" 
      minlength="8" required>

      <label for="confirm-password">Confirm Password</label>
      <input type="password" name="confirm-password" 
      id="confirm-password" required>

      <p id="sign-up-error" class="hidden prompt error"></p>
      
      <p id="sign-up-success" class="hidden prompt success">
        Account created successfully!
      </p>

    <!-- After filling the form, the user will submit it! -->
    <input type="submit" value="Sign Up" class="submission" id="sign-up-btn">
  </form>

  <!-- Log In Form -->
  <!-- The log-in form will have the hidden class because upon landing
  on the "My Account" page, the sign-up form will shown first. There is 
  DOM manipulation involved to switch between the two forms. -->
  <form action="#" id="log-in-form" class="hidden" onsubmit="return false">
    <label for="log-in-email">Email</label>
    <input type="email" name="log-in-email" id="log-in-email" required>
  
    <label for="log-in-password">Password</label>
    <input type="password" name="log-in-password" id="log-in-password" required>
    
    <input type="submit" value="Log In" class="submission" id="log-in-btn">

    <p id="log-in-error" class="hidden prompt error"></p>

    <p id="log-in-success" class="hidden prompt success">
        Logged In!
      </p>
  </form>
</section>

<!-- This JS file is specific to the account page -->
<script src="./js/myAccount.js"></script>

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