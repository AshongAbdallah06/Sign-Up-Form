let claimButton = document.querySelector('.js-claim');

let firstName = document.querySelector('.js-first-name');
let lastName = document.querySelector('.js-last-name');
let nameRegex = /^[a-z]+$/i;

let email = document.querySelector('.js-email');
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

let password = document.querySelector('.js-password');
let passwordRegex = /[0-9A-Za-z]{8,}/;


function validateFields() {
  // First Name
  if (firstName.value.match(nameRegex)) {
    console.log('Working');

    document.querySelector('.fname-error').innerHTML = "";
    document.querySelector('.fname-error-icon').style.display = 'none';
    firstName.classList.remove('border-error');

  } else {

    document.querySelector('.fname-error').innerHTML = 'First Name cannot be empty';
    document.querySelector('.fname-error-icon').style.display = 'initial';
    firstName.classList.add('border-error')
  }
  
  // Last Name
  if (lastName.value.match(nameRegex)) {
    console.log('Working');

    document.querySelector('.lname-error').innerHTML = "";
    document.querySelector('.lname-error-icon').style.display = 'none';
    lastName.classList.remove('border-error');

  } else {

  document.querySelector('.lname-error').innerHTML = 'Last Name cannot be empty';
    document.querySelector('.lname-error-icon').style.display = 'initial';
    lastName.classList.add('border-error')
  }
  
  // Email
  if (email.value.match(emailRegex)) {
    console.log('Working');

    document.querySelector('.email-error').innerHTML = "";
    document.querySelector('.email-error-icon').style.display = 'none';
    email.classList.remove('border-error');

  } else if (!email.value.match(emailRegex)) {
    document.querySelector('.email-error').innerHTML = "Provide a valid email";
    document.querySelector('.email-error-icon').style.display = 'initial';
    email.classList.add('border-error')
  }
  
  // Password
  if (password.value.match(passwordRegex)) {
    console.log('Working');

    document.querySelector('.password-error').innerHTML = "";
    document.querySelector('.password-error-icon').style.display = 'none';
    password.classList.remove('border-error');

  } else {
    document.querySelector('.password-error').innerHTML = "Provide a valid password";
    document.querySelector('.password-error-icon').style.display = 'initial';
    password.classList.add('border-error')
  }
}

claimButton.addEventListener('click', () => {
  validateFields();
