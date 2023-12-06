let email = document.getElementById('email');
let username = document.getElementById('username');
let password = document.getElementById('password');
let divImg = document.getElementById('div-img');

email.addEventListener('click' , ()=>{
    divImg.style.backgroundImage = 'url(https://images.pexels.com/photos/441179/pexels-photo-441179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
})
username.addEventListener('click' , ()=> {
    divImg.style.backgroundImage = 'url(https://images.pexels.com/photos/10187150/pexels-photo-10187150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
})
password.addEventListener('click',()=>{
    divImg.style.backgroundImage = 'url(https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
})

var userData;
var gottenData
const signup = () =>{
    if(email.value === '' && username.value === '' && password.value === '') {
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('You must fill out the form before moving forward');

        // Display a success notification
        // notyf.success('Your changes have been successfully saved!');
    } 
    else if (username.value === '' && password.value === '') {
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('username and password is empty');

        // Display a success notification
        // notyf.success('Your changes have been successfully saved!');
    }
    else if (username.value === '' && email.value === '') {
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('username and email is empty');

        // Display a success notification
        // notyf.success('Your changes have been successfully saved!');
    }
    else if (email.value === '' && password.value === '') {
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('email and password is empty');

        // Display a success notification
        // notyf.success('Your changes have been successfully saved!');
    }
    else if (email.value === '') {
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('Email is empty');

        // Display a success notification
        // notyf.success('Your changes have been successfully saved!');
    } 
    else if (username.value === '') {
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('Username is empty');

        // Display a success notification
        // notyf.success('Your changes have been successfully saved!');
    }
    else if (password.value === '') {
        var notyf = new Notyf(
            {
                duration: 3000,
                position : {
                    x : 'center',
                    y : 'top'
                },
                
                dismissible: true,
            }
        );
        // Display an error notification
        notyf.error('Password is empty');

        // Display a success notification
        // notyf.success('Your changes have been successfully saved!');
    }
    else {
        userData = {
            userEmail:email.value,
            userName:username.value,
            userPassword:password.value,
        } 
        localStorage.setItem('data',JSON.stringify(userData));

        gottenData = JSON.parse(localStorage.getItem('data'))

        window.location.href = 'redirect.html';

        // alert(`Welcome ${userData.userName}`);
    }
}