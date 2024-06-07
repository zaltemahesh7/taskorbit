const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTasksAdd = [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
            localStorage.setItem('tasks', JSON.stringify(newTasksAdd));
            return {
                ...state,
                tasks: newTasksAdd,
            };
        case 'DELETE_TASK':
            const newTasksDelete = state.tasks.filter((task) => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(newTasksDelete));
            return {
                ...state,
                tasks: newTasksDelete,
            };
        case 'TOGGLE_TASK':
            const newTasksToggle = state.tasks.map((task) =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(newTasksToggle));
            return {
                ...state,
                tasks: newTasksToggle,
            };
        case 'EDIT_TASK':
            const newTasksEdit = state.tasks.map((task) =>
                task.id === action.payload.id ? { ...task, text: action.payload.text } : task
            );
            localStorage.setItem('tasks', JSON.stringify(newTasksEdit));
            return {
                ...state,
                tasks: newTasksEdit,
            };
        default:
            return state;
    }
};

export default taskReducer;
