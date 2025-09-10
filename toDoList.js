"use strict";

//pega os elementos do html
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//função para adicionar tarefa
function addTask() {
  const taskText = taskInput.value.trim(); //pega o texto e remove os espaços

  //impede de adicionar valores vazios
  if (taskText === "") {
    alert("Digite uma tarefa antes de adicionar");
    return;
  }

  //cria um novo item da lista
  const li = document.createElement("li");

  //cria um span para o texto
  const span = document.createElement("span");
  span.textContent = taskText; //define o texto da tarefa

  //ao clicar na tarefa marca/desmarca como concluida
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  //cria botão de excluir
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";

  //ao clicar no botão, remove a tarefa
  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });

  //coloca o botão dentro do li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  //adiciona o li dentro da ul
  taskList.appendChild(li);

  //limpa o campo de texto
  taskList.value = "";
}

addTaskBtn.addEventListener("click", addTask);

//permite adicionar tarefa apertando "Enter"
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
