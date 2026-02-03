import { fetchGet, fetchDelete} from "../fetch.js";
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.assign('/login/index.html');
});

const id = sessionStorage.getItem('id');


async function tasks() {  
    const match = document.querySelector('.match');
    const tasks = await fetchGet('task');
    let html = '';
    tasks.forEach(ele => {
        if (ele.workerId == id) {
            html += `
                <div class="sidebar sticky-top" style="top: 2rem;">
                    <div class="sidebar-action mb-4 d-flex flex-column">
                        <div class="card-body d-flex flex-column align-items-center gap-1">
                            <div><h5 class="fw-bold">${ele.title}</h5></div>
                            <div><h5 class="text-secondary">${ele.category}</h5></div>
                            <div><h5 class="text-secondary">${ele.priority}</h5></div>
                            <div><h5 class="text-secondary">${ele.status}</h5></div>
                            <div><p class="text-center">${ele.description}</p></div>
                            <div><h5 class="text-secondary">${ele.workerId}</h5></div>
                        </div>
                    </div> 
                </div> 
    `;
        }
        match.innerHTML = html;
    })
}
const btnDelete = document.getElementById('btnDelete')
btnDelete.addEventListener('click', () =>{
    fetchGet('task')
    .then(ele =>{
        ele.forEach(element => {
            if (element.workerId == id){
                const res = prompt(`Desea terminar la tarea ${element.title}, (si o no)`)
                if (res == "si"){
                    fetchDelete(element.id,'task')
                    
                }else{
                    alert("aqui no ")
                }

            }
            
            
        });

    })
    

})




tasks();




