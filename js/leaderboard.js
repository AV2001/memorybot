// Using the strict mode to avoid any potential issues
'use strict';

// Importing the myAccount variable from game.js.
import { myAccount } from './game.js';

/* Implementing the logout functionality for the leaderboard page after the 
user logs in. */
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

// Accessing all the elements in leaderboard.php by their id.
const table = document.getElementById('leaderboard-table');

// Creating the tbody element to append other table elements to it.
const tableBody = document.createElement('tbody');

let userObjects = [];
// Only loops through the local storage if the length is at least 1 and the max.
if (
  localStorage.length > 0 &&
  JSON.parse(localStorage.getItem(localStorage.key(0))).maxScore > 0
) {
  for (let i = 0; i < localStorage.length; i++) {
    // Pushing the objects from the local storage to the userObjects array.
    userObjects.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

    // Sorting the array of objects based on maxScore in descending order.
    userObjects.sort((first, second) => second.maxScore - first.maxScore);
  }
  /* Looping through the userObjects array and creating a table row and three 
  table data elements for each user object.*/
  userObjects.forEach((object, index) => {
    const tableRow = document.createElement('tr');
    const tableData1 = document.createElement('td');
    const tableData2 = document.createElement('td');
    const tableData3 = document.createElement('td');

    // Only adds the score to the table if its more than 0.
    if (object.maxScore > 0) {
      /* Index starts from 0, so adding 1 starts the ranking number 
      from 1 instead of 0. */
      tableData1.textContent = index + 1;
      tableData2.textContent = object.userFullName;
      table;
      tableData3.textContent = object.maxScore;

      table.appendChild(tableBody);
      tableBody.appendChild(tableRow);
      tableRow.appendChild(tableData1);
      tableRow.appendChild(tableData2);
      tableRow.appendChild(tableData3);
    }
  });
  /* If the local storage is empty or if the score of the first user to be 
  pushed into the leaderboard has a max score of 0, then add 5 rows of 
  dashes indicating that the tabe is empty.*/
} else {
  /* Using a for loop to create 5 table rows and each table row has 
  3 table data elements filled with dashes.*/
  for (let i = 1; i <= 5; i++) {
    const tableRow = document.createElement('tr');
    const tableData1 = document.createElement('td');
    const tableData2 = document.createElement('td');
    const tableData3 = document.createElement('td');

    tableData1.innerHTML = '&mdash;';
    tableData2.innerHTML = '&mdash;';
    tableData3.innerHTML = '&mdash;';

    table.appendChild(tableBody);
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
  }
}
