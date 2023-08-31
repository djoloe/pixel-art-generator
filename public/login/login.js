
const revealPasswordSvg = document.getElementById('reveal-password');
const password = document.getElementById('id-password');
const createAccountLink = document.getElementById('create-account');
const nameBox = document.getElementById('show/hide-name');
const loginButton = document.getElementById('register-button');
const changeButtonText = document.getElementById('change-button-text');
const userName = document.getElementById('show/hide-name');
const userEmail = document.getElementById('id-email');
const userPassword = document.getElementById('id-password');
const nameOfUser = document.getElementById('name-id');
let registerForm = document.getElementById('register-form');
const mainDiv = document.getElementsByClassName('#main-content');
const loginForm = document.getElementById('login-form');
const backToRegisterLink = document.getElementById('back-to-register');
const forgotPassword = document.getElementById('forgot-username-password-id');


let click = 0;
axios.defaults.withCredentials = true;

revealPasswordSvg.addEventListener('click', () => {
    click++;
    if(click % 2 === 0 ){
        revealPasswordSvg.src = '/public/svg/lock-password.svg';
        password.type = 'password';
    } else{
        revealPasswordSvg.src = '/public/svg/unlock-password.svg';
        password.type = 'text';
    }
})

createAccountLink.addEventListener('click', (e) =>{
  loginForm.replaceWith(registerForm);
})

backToRegisterLink.addEventListener('click', (e) =>{
  registerForm.replaceWith(loginForm);
})

registerForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  
    const userNewForm = new FormData(registerForm);
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/register-user',
      data: userNewForm,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(function (response){
      console.log(response)
    })
    .catch( function (response){
      console.log(response);
    })
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginNewForm = new FormData(loginForm);
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/login-user',
      data: loginNewForm,
      headers:{
        "Content-type" : "application/json; charset=UTF-8",
      },
    })
    .then((response) => {
      if(response.status === 200){
        window.location.href = 'http://127.0.0.1:5500/public/main/main.html';
      }
    })
    .catch( (response) => {
      console.log( response);
    })
})

forgotPassword.addEventListener('click', () =>{
  window.location.href = 'http://127.0.0.1:5500/public/forgot-layer/forgot.html';

})


