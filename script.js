
document.getElementById ('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText!=="") {
        //Crear un nuevo elemento de lista.
        const li = document.createElement('li');
        li.textContent = taskText;

        //Boton de eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';

        //Agregar el boton al elemento li
        li.appendChild(deleteBtn);

        //Agregar el li a la lista de tareas.
        document.getElementById('taskList').appendChild(li);

        //Limpiar el input
        taskInput.value = "";

        //Marcar la tarea como completada al hacer clic en el texto
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        //Eliminar la tarea al hacer clic en el boton de eliminar
        deleteBtn.addEventListener('click', function() {
            li.remove()
        });

        
    }else {
        alert ('Por favor escribe una tarea');
    }
});


