// API falsa de login 
// Primeiramente criando a função ''init''


const init = ()  => {
const email = document.querySelector ('#e-mail')
const senha = document.querySelector ('#senha')
const button = document.querySelector ('.butão')

if(button) {
    button.addEventListener ('click', (event) => {
    event.preventDefault();

     fetch('https://reqres.in/api/login',  {
         method: 'POST',
         headers: {
             'Content-Type':'application/json'
         },
         body:JSON.strangify({
         email: email.value,
         password: senha.value,


         }).then((response) => {
             return response.json();
         })
             .then((data) => {
                 console.log (data)
             }) 

        })

    })
  } 


  }

  window.onload = init;