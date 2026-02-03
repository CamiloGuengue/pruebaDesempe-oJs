import { fetchPost } from "../fetch.js";


const btnRegister = document.getElementById('btnFinishRegister');
btnRegister.addEventListener('click', () =>{
    const takeName = document.getElementById('nameUser').value
    const takeEmail = document.getElementById('email').value
    const takePassword = document.getElementById('password').value

    const data = {
        name:takeName,
        email:takeEmail,
        password:takePassword
    }

    fetchPost('users',data)
    window.location.assign('/login/index.html');

    



})