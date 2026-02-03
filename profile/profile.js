import {fetchGet} from '../fetch.js'

const id = sessionStorage.getItem('id');
const name = document.getElementById('profileName');
const email = document.getElementById('profileEmail');
let suma = 0
let sumaCompleted = 0
fetchGet('task')
.then(ele =>{
    ele.forEach(element => {
        if(element.workerId == id){
            suma = suma + 1
            console.log(suma)



        }else if (element.status == "Completed")
            sumaCompleted = sumaCompleted + 1
        
    });
    const tareas = document.getElementById('tasksCount');
    const tareasCompleted = document.getElementById('doneCount')
    tareas.textContent = suma;
    tareasCompleted.textContent = sumaCompleted;
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



    
