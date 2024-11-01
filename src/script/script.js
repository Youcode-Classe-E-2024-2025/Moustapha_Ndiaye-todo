// task board 
let tasks = [];
let counterId = 0;

// Allow user to add informations about his task
const AddToDo = document.getElementById('AddToDo');
const add_card = document.getElementById('add-card');

AddToDo.addEventListener('click', () => {
    if (add_card.style.display === 'none' || add_card.style.display === '') {
        add_card.style.display = 'block';
    } else {
        add_card.style.display = 'none';
    }
});

const save_task = document.getElementById('save_task');

save_task.addEventListener('click', () => {
    // Récupérer les données des champs de saisie
    const titleInput = document.querySelector('input[type="text"][placeholder="Enter the title of your task"]');
    const descriptionInput = document.querySelector('textarea[placeholder="Enter the description of your task"]');
    const dateInput = document.querySelector('input[type="text"][placeholder="Enter the due date of your task (jj/mm/aaaa)"]');
    const prioritySelect = document.querySelector('select');

    // Stocker les données
    const title = titleInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;
    const priority = prioritySelect.value;

    // Réinitialiser les champs d'entrée
    if (title && description && date) {
        add_atsk(counterId++, title, description, date, priority); // Ajout de la priorité

        // Réinitialisation des valeurs des champs
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        prioritySelect.value = 'medium'; // ou la valeur par défaut souhaitée
    } else {
        alert('Veuillez remplir tous les champs');
    }
});

function add_atsk(id, title, description, date, priority) {
    const newTask = {
        id, title, description, date, priority, done: false // Ajouter done pour la gestion de l'état
    };
    tasks.push(newTask);
}
console.log(tasks);