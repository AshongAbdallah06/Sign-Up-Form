let claimButton = document.querySelector('.js-claim');

let firstName = document.querySelector('.js-first-name');
let lastName = document.querySelector('.js-last-name');
let nameRegex = /^[a-z]+$/i;

let email = document.querySelector('.js-email');
let emailRegex = /^[^\s@]+@[^\s@0-9]+\.[^\s@0-9]+$/g;

let password = document.querySelector('.js-password');
let passwordRegex = /[0-9A-Za-z]{8,}/;


function fields(inputType, regex, errorMessageContainer, errorMessage, errorImageContainer) {
  if (inputType.value.match(regex)) {
    errorMessageContainer.innerHTML = '';
    errorImageContainer.style.display = 'none';
    inputType.classList.remove('border-error');
  } else {
    errorMessageContainer.innerHTML = errorMessage;
    errorImageContainer.style.display = 'initial';
    inputType.classList.add('border-error');
  }
}
claimButton.addEventListener('click', () => {
  
  fields(document.querySelector('.js-first-name'), nameRegex, document.querySelector('.fname-error'), 'Invalid First Name', document.querySelector('.fname-error-icon'));
  
  fields(document.querySelector('.js-last-name'), nameRegex, document.querySelector('.lname-error'), 'Invalid Last Name', document.querySelector('.lname-error-icon'));
  
  fields(document.querySelector('.js-email'), emailRegex, document.querySelector('.email-error'), 'Invalid Email Address', document.querySelector('.email-error-icon'));
  
  fields(document.querySelector('.js-password'), passwordRegex, document.querySelector('.password-error'), 'Invalid Password', document.querySelector('.password-error-icon'));
});
