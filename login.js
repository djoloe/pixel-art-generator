


const revealPasswordSvg = document.getElementById('reveal-password');
const password = document.getElementById('id-password');
const createAccountLink = document.getElementById('create-account');
const nameBox = document.getElementById('show/hide-name');
const loginButton = document.getElementById('login-button');
const changeButtonText = document.getElementById('change-button-text');
const userName = document.getElementById('show/hide-name');
const userEmail = document.getElementById('id-email');
const userPassword = document.getElementById('id-password');

let click = 0;
const baseURL = 'http://localhost:3000';

revealPasswordSvg.addEventListener('click', () => {
    click++;
    if(click % 2 === 0 ){
        revealPasswordSvg.src = '/svg/lock-password.svg';
        password.type = 'password';
    } else{
        revealPasswordSvg.src = '/svg/unlock-password.svg';
        password.type = 'text';
    }
})

createAccountLink.addEventListener('click', (e) =>{
    e.preventDefault();
    nameBox.removeAttribute('style');
    changeButtonText.textContent = 'Create';
    getTest();
});
   

loginButton.addEventListener('click', () => {
    nameBox.style.display = 'none';
    changeButtonText.textContent = 'Login';
});


function fetchNewUser(){
   const newUser = {
        newName : userName.value,
        newEmail : userEmail.value,
        newPassword : userPassword.value
   }
   return newUser;
}

async function getTest() {
    const res = await axios.get(baseURL);
    return res;
}