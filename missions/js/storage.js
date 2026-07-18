export function loadTodos() {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
}

export function saveTodos(todos){
    localStorage.setItem("todos", JSON.stringify(todos));
}