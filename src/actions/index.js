export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

let nextID = 5;

function addTodo(title) {
    return {
        type: ADD_TODO,
        id: nextID++,
        title
    }
}

function deletTodo(id) {
    return {
        type: DELETE_TODO,
        id,
    }
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

function editTodo(id, title) {
    return {
        type: EDIT_TODO,
        id,
        title,
    }
}

export { deletTodo, toggleTodo, editTodo, addTodo };