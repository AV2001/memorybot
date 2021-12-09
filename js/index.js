// Using the strict mode to avoid any potential issues
'use strict';

// Importing the myAccount variable from game.js.
import { myAccount } from './game.js';

// Implementing the logout functionality for the home page after the user logs in.
if (sessionStorage.length > 0) {
  window.onload = function logout() {
    myAccount.textContent = 'Logout';

    myAccount.addEventListener('click', function () {
      // Removing the current logged in user from the session storage.
      sessionStorage.removeItem(sessionStorage.key(0));
      // Changing the text back to "My Account"
      myAccount.textContent = 'My Account';
    });
  };
}
