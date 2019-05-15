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
    
}

function validatePhone() {
    // Get the value of the phone field
    const phone = document.getElementById('phone');
    
}