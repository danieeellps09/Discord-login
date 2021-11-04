 const button = document.querySelector(".butão") 


button.addEventListener('click',(event) => {
event.preventDefault()

const email = document.getElementById ('e-mail')
const senha = document.getElementById ('senha')
const labelemail = document.getElementById ('email')
const labelsenha = document.getElementById ('password')
const resultado1 = document.getElementById ('resultado1')
const resultado2 = document.getElementById ('resultado2')

if (email.value == '') {
    email.style.border = "1px solid red"
    labelemail.style.color = 'red'
    resultado1.innerHTML= " - Este campo é obrigatório"
}    

if (senha.value == '') {
    senha.style.border = "1px solid red"
    labelsenha.style.color = 'red'
    resultado2.innerHTML = " - Este campo é obrigatório"
}    




})