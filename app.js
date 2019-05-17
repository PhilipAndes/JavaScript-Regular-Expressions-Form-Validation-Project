// Form Blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    // Get the value of the name field
    const name = document.getElementById('name');
    // Lets create a variable for a regular expression we want to match
    const re = /^[a-zA-Z]{2,10}$/; // The name should be letter between a-z, capital or lowercase and it should be between 2 and 10

    // So to actualy evaluate this:
    // if not re. test method, which takes in the name.value (value is the actual input)
    if(!re.test(name.value)) {
        // if that is invalid, remember we have to add that isnt valid class to this input to see the message and make it red:
        name.classList.add('is-invalid');
    } else {
        // else we want it removed:
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    // Get the value of the zipcode field
    const zip = document.getElementById('zip');
    // Here we are using the Dutch zipcode, which is always 4 numbers and then 2 uppercase letters, so for example:  4000XP
    const re = /^[0-9]{4}[A-Z]{2}$/; 

    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    // Get the value of the email field
    const email = document.getElementById('email');
    // In here we want to group together a bunch of stuff, we want letters upper/lower, numbers, underscores, dashes, dots, we have to use backslashes else we get in trouble, and we also want to add the plus because we want to search for more then one.
    // Then we want a literal @ sign, so we have to go outside the group
    // Then we want another group, this is going to be the same as the first part, so just copy it in:
    // Then we want a literal . (dot) so we have to go outside the paretheses again:
    // Then we want our last group for the .com/.net/.gmail/etc, it can be up to 5 max
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; 

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }  
}

function validatePhone() {
    // Get the value of the phone field
    const phone = document.getElementById('phone');
    // We want to accept different formats, like: 06 1234 5678/ (06)1234 5678/ 06.1234 5678/ 0612345678 
    // So lets start with the paretheses (), we want literal paretheses, so begin with backslash, then the paretheses, and a ? mark because we want it to be optional!
    // We want it to be a digit, so again, backslash en then d: \d
    // We want it to be minimal 2 (for mobile phone numbers) 
    // Then another backslash for the  literal paretheses to close it ()
    // Then the ? mark because it should be optional!
    // We want it to be possible to seperate it with a dash, dot or space
    // so after the ? mark the brackets with a dash, a dot and a space
    // which is a optional as wel, so again a space
    // Then another set of 4 digits
    // Notice that I have changed the message in the UI but not with all acceptable formats
    const re = /^\(?\d{2}\)?[-. ]?\d{4}[-. ]?\d{4}$/; 

    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    } 
}