const signInBtn = document.querySelector('.signInBtn'); 
const signUpBtn = document.querySelector('.signUpBtn'); 
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body'); 

signUpBtn.onclick = function() {
  formBx.classList.add('active');
  body.classList.add('active');
}

signInBtn.onclick = function() {
  formBx.classList.remove('active');
  body.classList.remove('active');
}