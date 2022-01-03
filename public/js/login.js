const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();
const button =document.getElementById('login-btn')
const pw = document.getElementById('password-login')
const em= document.getElementById('email-login')

button.disabled= true
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/subs');
    } else {
      alert('Failed to log in');
    }
  }
};

const enableSearch= async() =>{
  console.log(em.value.length)
 if(em.value.length > 4 && pw.value.length > 4){
 button.disabled= false
} else
{
  button.disabled= true
}
}
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
pw.addEventListener('keyup', enableSearch)
em.addEventListener('keyup', enableSearch)
