import {fetchGet} from '../fetch.js'

const btnExit = document.getElementById('logoutBtn');
btnExit.addEventListener('click',()=>{
    window.location.assign('/login/index.html');
})



const id = sessionStorage.getItem('id');
const name = document.getElementById('profileName');
const email = document.getElementById('profileEmail');
let add = 0
let addCompleted = 0
fetchGet('task')
.then(ele =>{
    ele.forEach(element => {
        if(element.workerId == id){
            add = add + 1
            console.log(add)



        }else if (element.status == "Completed")
            addCompleted = addCompleted + 1
        
    });
    const tasks = document.getElementById('tasksCount');
    const tasksCompleted = document.getElementById('doneCount')
    tasks.textContent = add;
    tasksCompleted.textContent = addCompleted;
})

fetchGet('users')
.then(ele =>{
    ele.forEach(element =>{
        if (element.id == id){
            name.textContent = element.name
            email.textContent = element.email
        }
    })
})



    
