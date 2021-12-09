// Using the strict mode to avoid any potential issues
'use strict';

/* This file will contain common elements and function that other JavaScript
files can use */

/* Accessing all the elements by their id. Since some of these elements are 
being changed in most of the pages, they will be available in other 
JavaScript files. */

// SIGN UP
const signUpMenuBtn = document.getElementById('sign-up-menu-btn');
const signUpForm = document.getElementById('sign-up-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const signUpEmail = document.getElementById('sign-up-email');
const dob = document.getElementById('dob');
const gender = document.getElementsByName('gender');
const male = document.getElementById('male');
const female = document.getElementById('female');
const signUpPassword = document.getElementById('sign-up-password');
const confirmPassword = document.getElementById('confirm-password');
const signUpBtn = document.getElementById('sign-up-btn');

// LOG IN
const logInMenuBtn = document.getElementById('log-in-menu-btn');
const logInForm = document.getElementById('log-in-form');
const logInEmail = document.getElementById('log-in-email');
const logInPassword = document.getElementById('log-in-password');
const logInBtn = document.getElementById('log-in-btn');

// SUCCESS PROMPTS
const signUpSuccess = document.getElementById('sign-up-success');
const logInSuccess = document.getElementById('log-in-success');

// ERROR PROMPTS
const signUpError = document.getElementById('sign-up-error');
const logInError = document.getElementById('log-in-error');

// SENDING data to LOCAL STORAGE.
const sendToLocalStorage = (object) => {
  // User email will be the key as it differentiates one user from the other.
  return localStorage.setItem(object.userEmail, JSON.stringify(object));
};

// GETTING data from LOCAL STORAGE.
const getFromLocalStorage = (input) => {
  return JSON.parse(localStorage.getItem(input));
};

// Function that SENDS data to the session storage.
const sendToSessionStorage = (input) => {
  return sessionStorage.setItem(input.userEmail, JSON.stringify(input));
};

const switchToLogInForm = () => {
  /* When the logInBtn is clicked, the hidden class on it will be removed and 
  the same class will be added to the signUpForm. Meaning, the logInform will
  be shown and the signUpForm will be hidden from view. */
  signUpForm.classList.add('hidden');
  logInForm.classList.remove('hidden');
  signUpMenuBtn.classList.remove('active');
  logInMenuBtn.classList.add('active');
};

if (signUpMenuBtn) {
  signUpMenuBtn.addEventListener('click', function () {
    /* When the signUpBtn is clicked, the hidden class on it will be removed and 
    the same class will be added to the logInForm. Meaning, the signUpform will
    be shown and the logInForm will be hidden from view. */
    logInForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
    signUpMenuBtn.classList.add('active');
    logInMenuBtn.classList.remove('active');
  });
}

if (logInMenuBtn) {
  logInMenuBtn.addEventListener('click', switchToLogInForm);
}

// Function for checking whether input fields are blank
const signUpFormValidation = () => {
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    signUpEmail.value.length > 0 &&
    dob.value.length > 0 &&
    (male.checked || female.checked) &&
    signUpPassword.value.length >= 8
  ) {
    return true;
  }
};

// Function for checking whether password = confirm password.
const passwordValidation = () => {
  if (signUpPassword.value === confirmPassword.value) {
    // Show the success prompt for a second and make it hidden.
    setTimeout(function () {
      signUpSuccess.classList.toggle('hidden');
    }, 1000);
    signUpSuccess.classList.toggle('hidden');
    return true;
  } else {
    // Show the error prompt for two seconds and make it hidden.
    signUpErrorPrompt('Please make sure that both passwords match!');
  }
};

// Function for clearing input fields upon successful submission of the form.
const clearFields = () => {
  firstName.value = '';
  lastName.value = '';
  signUpEmail.value = '';
  dob.value = '';
  male.checked = false;
  female.checked = false;
  signUpPassword.value = '';
  confirmPassword.value = '';
};

/* Function to remove the required attribute from the input fields to prevent 
errors from the browser's console tab. */
const removeRequiredFromInput = () => {
  firstName.removeAttribute('required');
  lastName.removeAttribute('required');
  signUpEmail.removeAttribute('required');
  dob.removeAttribute('required');
  gender.forEach((item) => {
    item.removeAttribute('required');
  });
  signUpPassword.removeAttribute('required');
  confirmPassword.removeAttribute('required');
};

// Sign-up form error prompts
const signUpErrorPrompt = (message) => {
  signUpError.textContent = message;
  setTimeout(function () {
    signUpError.classList.toggle('hidden');
  }, 2000);
  signUpError.classList.toggle('hidden');
};

// Log-in form error prompts
const logInErrorPrompt = (message) => {
  logInError.textContent = message;
  setTimeout(function () {
    logInError.classList.toggle('hidden');
  }, 2000);
  logInError.classList.toggle('hidden');
};

// Array of user objects that will store details of users
let users = [];

if (signUpBtn) {
  signUpBtn.addEventListener('click', function () {
    /* Checking whether the email entered in the sign up form is matching 
  the email of an already registered user in the local storage */
    if (localStorage.getItem(signUpEmail.value) !== null) {
      signUpErrorPrompt('An account with this email already exists!');
    } else if (
      signUpFormValidation() &&
      passwordValidation() &&
      localStorage.getItem(signUpEmail.value) === null
    ) {
      // Function that returns the selected radio button.
      const getRadioButtonValue = () => {
        for (let i = 0; i < gender.length; i++) {
          if (gender[i].checked) {
            return gender[i].value;
          }
        }
      };
      // Creates a new user object
      const user = {
        /* Capitalizing the first letter of both the first name and last name, 
      and combining it into full name.*/
        userFullName:
          firstName.value.charAt(0).toUpperCase() +
          firstName.value.slice(1) +
          ' ' +
          lastName.value.charAt(0).toUpperCase() +
          lastName.value.slice(1),
        userEmail: signUpEmail.value,
        userDOB: dob.value,
        userGender: getRadioButtonValue(),
        userPassword: signUpPassword.value,
        userConfirmPassword: confirmPassword.value,
        maxScore: 0,
      };
      users.push(user);
      /* Clears input fields - provides a visual cue to the user that the data
    was indeed submitted */
      clearFields();
      removeRequiredFromInput();
      // Calling the function previously defined to switch to the login form.
      setTimeout(switchToLogInForm, 1000);
      /* Looping through the users array and adding each object to the 
      local storage.*/
      users.forEach((object) => {
        sendToLocalStorage(object);
      });
    }
  });
}

if (logInBtn) {
  logInBtn.addEventListener('click', function () {
    const userObject = getFromLocalStorage(logInEmail.value);

    /* Checking if the email entered in the login form exists in the local
    Storage, and if it does, then check whether the email address and password
    are matching. */
    if (localStorage.getItem(logInEmail.value) !== null) {
      if (
        logInEmail.value === userObject.userEmail &&
        logInPassword.value === userObject.userPassword
      ) {
        // Hiding the login button as it's colliding with the success prompt
        logInBtn.style.visibility = 'hidden';

        // Displaying the successful login prompt.
        logInSuccess.classList.toggle('hidden');

        /* Removing the previous session if there are any because ideally 
        we only want one user at a time in the session storage */
        sessionStorage.removeItem(sessionStorage.key(0));

        // Object that will be send to the session storage.
        const loggedInUser = {
          userFullName: userObject.userFullName,
          userEmail: userObject.userEmail,
          userPassword: userObject.userPassword,
        };

        // Sending the logged in user's data to the session storage.
        sendToSessionStorage(loggedInUser);

        // Redirecting the user to the game page.
        setTimeout(function () {
          location.href = './level_one.php';
        }, 1500);
      } else if (logInPassword.value.length > 0) {
        // Error prompt if incorrect login credentials are provided.
        logInErrorPrompt('Wrong email/password, please try again!');
      }
    } else if (logInPassword.value.length > 0) {
      // Error prompt if email that does not exist in the local storage is provided.
      logInErrorPrompt('An account with this email does not exist!');
    }
  });
}
