//Retrieving HTML elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Submit kay button par click karke ye action perform hojai


//Function to update class and message for errors
function showerror(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}



//Function to update class for success
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success'
}





//Event Listensers
//Activating button using event-listener
form.addEventListener('submit', function(e) {
    e.preventDefault(); //Stop page from reloading
    //console.log('Submitted');
    console.log(username.value); //wase code ajaiga console ma mgr '.value' lagakar hum username ki vlaue get karsakte hain

    //Check if username input is empty
    if (username.value === '') {
        // alert('Username is required');
        //'showerror' is a function
        showerror(username, 'Username Is Required');

    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showerror(email, 'Email is not sexy')
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showerror(password, 'Password must contain atleast 12 digit')
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showerror(password2, 'Password not match')
    } else {
        showSuccess(password2);
    }


});

//var //its old
//let y = 1;
//x = 3; //its possible

//const x = 1; //ist fixed it cannot change
//x = 3; //not possible;