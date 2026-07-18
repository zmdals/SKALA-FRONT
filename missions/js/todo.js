let todos = [];
let currentFilter = "all";

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

function render() {
    const ul = document.querySelector(".list ul");
    ul.innerHTML = "";
    //필터 버튼 적용
    let filtered = todos;
    if (currentFilter === "processing"){
        filtered = todos.filter(function (t) {
            return !t.done;
        });
    } else if(currentFilter === "done"){
        filtered = todos.filter(function (t){
            return t.done;
        });
    }

    filtered.forEach(function(t){
        const li = document.createElement("li");
        li.setAttribute("data-id",t.id); //data-id="todo.id"

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = t.done;

        const text = document.createElement("span");
        text.textContent = t.task;

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";

        li.appendChild(checkBox);
        li.appendChild(text);
        li.appendChild(delBtn);

        ul.appendChild(li);
    });

    //summary 업데이트
    const summary = document.getElementById("summary");
    const doneNum = Number(todos.filter(function (t){return t.done}).length);
    const processingNum = Number(todos.filter(function (t){return !t.done}).length);
    const rate = todos.length === 0 ? 0 : Math.round((doneNum / todos.length) * 100);
    summary.textContent = "전체 " + todos.length + "개 - " +
        doneNum+ "개 완료 / " +
        processingNum + "개 진행중 | " + "완료율: " + rate + "%";

}

function addTodo() {
    const task = todoInput.value.trim();
    if (!task) return; //JS에선 0, "", null, undefined ,NaN등은 전부 falsy 값.

    todos.push({
        id: Date.now(),
        task: task,
        done: false
    });

    todoInput.value = "";
    render();
}

function addByEnter(e){
    if (e.key === "Enter") addTodo();
}

addBtn.addEventListener("click",addTodo);
todoInput.addEventListener("keyup", addByEnter); //keydown을 사용하니 한글에서 두번씩 추가되는 오류가 발생함.

const todoList = document.querySelector(".list ul");
todoList.addEventListener("click", function(e) {
    const li = e.target.closest("li");
    if (!li) return;
    const id = Number(li.getAttribute("data-id"));

    //체크박스 클릭 -> 완료 토글
    if (e.target.type == "checkbox"){
        const todo = todos.find(function (t) {
            return t.id === id;
        });
        if(todo) todo.done = !todo.done;
        render();
    }

    //삭제 버튼 클릭
    if (e.target.textContent === "X"){
        todos = todos.filter(function (t) {
            return t.id !== id;
        });
        render();
    }
});

const filters = document.querySelector(".filters");
filters.addEventListener("click", function (e){
    if(!e.target.dataset.filter) return;
    currentFilter = e.target.dataset.filter;
    render();
});

render();