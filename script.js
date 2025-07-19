// Tasks functionality
if (document.getElementById('task-form')) {
    document.getElementById('task-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const taskTitle = document.getElementById('task-title').value;
        addTask(taskTitle);
        document.getElementById('task-form').reset();
    });

    function addTask(title) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${title}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        saveTasks();
    }

    function toggleTask(checkbox) {
        const taskItem = checkbox.parentElement;
        taskItem.classList.toggle('completed');
        saveTasks();
    }

    function deleteTask(button) {
        button.parentElement.remove();
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(task => {
            tasks.push({
                title: task.querySelector('span').textContent,
                completed: task.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(this)">
                <span>${task.title}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            document.getElementById('task-list').appendChild(li);
        });
    }

    loadTasks();
}

// Notes functionality
if (document.getElementById('note-form')) {
    document.getElementById('note-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const noteContent = document.getElementById('note-content').value;
        addNote(noteContent);
        document.getElementById('note-form').reset();
    });

    function addNote(content) {
        const noteList = document.getElementById('note-list');
        const li = document.createElement('li');
        li.className = 'note-item';
        li.innerHTML = `
            <span>${content}</span>
            <button onclick="deleteNote(this)">Delete</button>
        `;
        noteList.appendChild(li);
        saveNotes();
    }

    function deleteNote(button) {
        button.parentElement.remove();
        saveNotes();
    }

    function saveNotes() {
        const notes = [];
        document.querySelectorAll('.note-item').forEach(note => {
            notes.push(note.querySelector('span').textContent);
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.forEach(note => {
            const li = document.createElement('li');
            li.className = 'note-item';
            li.innerHTML = `
                <span>${note}</span>
                <button onclick="deleteNote(this)">Delete</button>
            `;
            document.getElementById('note-list').appendChild(li);
        });
    }

    loadNotes();
}

// Goals functionality
if (document.getElementById('goal-form')) {
    document.getElementById('goal-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const goalTitle = document.getElementById('goal-title').value;
        addGoal(goalTitle);
        document.getElementById('goal-form').reset();
    });

    function addGoal(title) {
        const goalList = document.getElementById('goal-list');
        const li = document.createElement('li');
        li.className = 'goal-item';
        li.innerHTML = `
            <input type="checkbox" onchange="toggleGoal(this)">
            <span>${title}</span>
            <button onclick="deleteGoal(this)">Delete</button>
        `;
        goalList.appendChild(li);
        saveGoals();
    }

    function toggleGoal(checkbox) {
        const goalItem = checkbox.parentElement;
        goalItem.classList.toggle('completed');
        saveGoals();
    }

    function deleteGoal(button) {
        button.parentElement.remove();
        saveGoals();
    }

    function saveGoals() {
        const goals = [];
        document.querySelectorAll('.goal-item').forEach(goal => {
            goals.push({
                title: goal.querySelector('span').textContent,
                completed: goal.classList.contains('completed')
            });
        });
        localStorage.setItem('goals', JSON.stringify(goals));
    }

    function loadGoals() {
        const goals = JSON.parse(localStorage.getItem('goals') || '[]');
        goals.forEach(goal => {
            const li = document.createElement('li');
            li.className = `goal-item ${goal.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" ${goal.completed ? 'checked' : ''} onchange="toggleGoal(this)">
                <span>${goal.title}</span>
                <button onclick="deleteGoal(this)">Delete</button>
            `;
            document.getElementById('goal-list').appendChild(li);
        });
    }

    loadGoals();
}