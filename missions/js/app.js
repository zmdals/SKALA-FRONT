import { loadTodos, saveTodos } from "./storage.js";

let todos = loadTodos();
let currentFilter = "all";

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

function render() {
    const ul = document.querySelector(".list ul");
    ul.innerHTML = "";

    //필터 버튼 적용 - .filters 이벤트를 통해 currentFilter 변경
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

    //todos 중 data-filter 조건을 만족하는 것들만 filtered 배열에 걸림.
    filtered.forEach(function(t){
        const li = document.createElement("li");
        li.setAttribute("data-id",t.id); //data-id="todo.id"
        if (t.done) li.classList.add("done"); //취소선 스타일 적용을 위해 li태그마다 done 클래스를 넣어줌.

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
    summary.textContent = "전체 " + todos.length + "개 중 " +
        doneNum+ "개 완료 - " + "완료율: " + rate + "%";

}

function addTodo() {
    const task = todoInput.value.trim();
    //JS에선 0, "", null, undefined ,NaN등은 전부 falsy 값.
    //공백이나 이상한 값 들어오면 예외 처리.
    if (!task) {
        alert("올바른 값을 입력해주세요"); 
        todoInput.value = "";
        return; 
    }

    todos.push({
        id: Date.now(),
        task: task,
        done: false
    });

    todoInput.value = "";
    saveTodos(todos);
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

    //삭제 버튼 클릭 로직
    if (e.target.textContent === "X"){
        //confirm은 브라우저 내장함수, 취소 - false, 확인 - true 반환.
        if(!confirm("정말 삭제하시겠습니까?")) return; 
        todos = todos.filter(function (t) {
            return t.id !== id;
        });
        saveTodos(todos);
        render();
    }

    //체크박스 클릭 토글 로직
    if ((e.target.type == "checkbox" || e.target.tagName == "SPAN" || e.target.tagName == "LI")){
        const todo = todos.find(function (t) {
            return t.id === id;
        });
        if(todo) todo.done = !todo.done;
        saveTodos(todos);
        render();
    }
});

const filters = document.querySelector(".filters");
filters.addEventListener("click", function (e){
    //filters 클래스의 버튼들에 미리 data-filter 속성(all, processing, done)을 넣어둬서 dataset으로 꺼내서 쓸 수 있다.
    if(!e.target.dataset.filter) return;

    //필터 버튼 전부 돌면서 active 설정된 클래스 삭제 - 버튼 스타일링을 위해.
    document.querySelectorAll(".filters button").forEach(function (btn) {
        btn.classList.remove("active");
    });
    //현재 선택된 버튼에 active 클래스 할당
    e.target.classList.add("active");

    //currentFilter 값 할당
    currentFilter = e.target.dataset.filter;
    render();
});



render();

async function loadQuote() {
    const todayWord = document.getElementById("todayWord");

    try {
        //fetch에서 예외 터지면 기본문구
        const res = await fetch("https://korean-advice-open-api.vercel.app/api/advice");
        const data = await res.json();
        todayWord.textContent = "\"" + data.message + "\" - " + data.author;
    } catch (err){
        todayWord.textContent = "안되면 될 때 까지 (기본 문구로 대체 되었습니다.)";
    }
}

loadQuote();