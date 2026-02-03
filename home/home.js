import { fetchGet, fetchGetById, fetchPost } from '../fetch.js'




// ================= LOGOUT =================
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.assign('/login/index.html');
});



const btnSaveTask = document.getElementById('saveTask');
btnSaveTask.addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value
    const category = document.getElementById('category').value
    const priority = document.getElementById('priority').value
    const status = document.getElementById('status').value
    const description = document.getElementById('description').value
    const workerId = document.getElementById('workerId').value

    const data = {
        title: title,
        category: category,
        priority: priority,
        status: status,
        description: description,
        workerId: workerId
    }
    fetchPost('task', data)


    
})

async function tasks() {
    const match = document.querySelector('.match');
    try {
        const result = await fetchGet('task');  // Debe retornar array de objetos
        let html = '';  // ← Variable para acumular HTML
        
        result.forEach(element => {
            html += `
                <div class="sidebar sticky-top" style="top: 2rem;">
                    <div class="sidebar-action mb-4 d-flex flex-column">
                        <div class="card-body d-flex flex-column align-items-center gap-1">
                            <div><h5 class="fw-bold">${element.title}</h5></div>
                            <div><h5 class="text-secondary">${element.category}</h5></div>
                            <div><h5 class="text-secondary">${element.priority}</h5></div>
                            <div><h5 class="text-secondary">${element.status}</h5></div>
                            <div><p class="text-center">${element.description}</p></div>
                            <div><h5 class="text-secondary">${element.workerId}</h5></div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        match.innerHTML = html;  // ← Asigna todo al final [web:27][web:12]
        
    } catch (err) {
        console.error('Error rendering tasks:', err);
    }
}
tasks();






