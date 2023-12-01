// Redirecting javascript
const storage = JSON.parse(localStorage.getItem('data'));
let userName = document.getElementById('id');

const load = () => {
    setTimeout(()=>{
        userName.innerHTML = `welcome ${storage.userName}`;
    },3000)

    setTimeout(()=> {
        window.location.href = 'addvehicle.html';
    },4000)
}