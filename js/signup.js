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
        alert("input fields cnnot be empty")
        email.style.borderColor = 'black';
        username.style.borderColor = 'black';
        password.style.borderColor = 'black';
    } else {
        userData = {
            userEmail:email.value,
            userName:username.value,
            userPassword:password.value,
        } 
        localStorage.setItem('data',JSON.stringify(userData));

        gottenData = JSON.parse(localStorage.getItem('data'))

        window.location.href = 'index.html';
        
        alert(`Welcome ${userData.userName}`);
    }
}