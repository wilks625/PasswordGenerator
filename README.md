# 03 JavaScript: Password Generator

This application generates a random password based on the users input choices. They have the option to choose a password length between 8 to 128 characters and whether to include lower case, upper case, special characters, and numbers.

This application will run in the browser and features dynamically updated HTML and CSS powered by JavaScript code, as well as a responsive user interface that adapts to multiple screen sizes.

When The generate password button is clicked, a prompt will display, asking the users how many characters they would like their password to be. Validation has been incorportated to alert the user if they have entered a number that is less than 8, or more than 128 characters.

After the user enters their password length, a series of confirm pop up boxes will display. If the user clicks "ok", then it will include those characters. If the user selects "cancel" then those characters will not be included in the generated password. If no character types are chosen to be included, no password will be generated.

After the user has answered all of the prompts, a password that matches their selected criteria will be generated and displayed in the text box above the generate password button.