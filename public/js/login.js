const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();
const button =document.getElementById('login-btn')
const pw = document.getElementById('password-login')
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

const enableSearch= async() =>{
  button.disabled= true

}
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
pw.addEventListener('keyup', enableSearch)