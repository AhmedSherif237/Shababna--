const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');
  
    if (signInForm) {
      signInForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
  

        window.location.href = '../index.html';
      });
    }
  
    if (signUpForm) {
      signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
      
  
        
        window.location.href = '../index.html';
      });
    }
  });
  