const form = document.querySelectorAll("container")
const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();
const formInput = document.getElementsByClassName("form-input")
const loginFormHandler = async (event) => {
  event.preventDefault();  
  if (email && password) {
    
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  if(!!email || !password){
    
  }
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }

};

const enableSearch=() => {
  if (email && password) {
    document.getElementById("login-btn").disabled=false
    console.log(email)
}
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
formInput.addEventListener('keyup', enableSearch)
