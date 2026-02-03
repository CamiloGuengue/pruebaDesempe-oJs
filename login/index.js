import {fetchGet} from '../fetch.js'




const btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click', () => {
    window.location.assign('signUp.html');

});
const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click',()=>{
    const takeEmail = document.getElementById('email').value
    const takePassword = document.getElementById('password').value
    login(takeEmail,takePassword);
})

async function login(takeEmail,takePassword) {

    fetchGet('users')
    .then(result => {
        result.forEach(element => {
            if (element.email == takeEmail && element.password == takePassword){
                if (element.email == "admin@gmail.com"){
                    sessionStorage.setItem('id',element.id);
                    sessionStorage.setItem('email',element.email);

                    window.location.assign('/home/admin.html');
                }else{
                    sessionStorage.setItem('id',element.id);
                    sessionStorage.setItem('email',element.email);
                    window.location.assign('/home/user.html');
                

                }
                
            }
            
        });
    })
    
}