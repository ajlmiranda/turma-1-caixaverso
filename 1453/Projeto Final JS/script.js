const inputNovaTarefa = document.getElementById("addInput");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaDeTarefas = document.getElementById("listarTarefas");

function adicionarTarefa() {
    const inputText = inputNovaTarefa.value;
    if (!inputText) {
        console.log(inputText);
        alert("Digite uma tarefa!");
        return;
    }

    const addNovaTarefa = document.createElement("li");
    addNovaTarefa.classList.add("itemDaLista");
    addNovaTarefa.textContent = inputText;
    listaDeTarefas.appendChild(addNovaTarefa);
    inputNovaTarefa.value = "";

    const botaoDelete = document.createElement("button");
    botaoDelete.classList.add("botaoDelete");
    botaoDelete.textContent = "Excluir";
    botaoDelete.onclick = function () {
        listaDeTarefas.removeChild(addNovaTarefa);
    };

    addNovaTarefa.appendChild(botaoDelete);

    const botaoEdit = document.createElement("button");
    botaoEdit.classList.add("botaoEdit");
    botaoEdit.textContent = "Editar";
    botaoEdit.onclick = function () {
        const itemEditado = prompt("Edite sua tarefa");
        if (!itemEditado) {
            alert("Sua tarefa não foi modificada!");
            return;
        }
        addNovaTarefa.textContent = itemEditado;
        addNovaTarefa.appendChild(botaoDelete);
        addNovaTarefa.appendChild(botaoEdit);
    };

    addNovaTarefa.appendChild(botaoEdit);
}

botaoAdicionar.addEventListener("click", adicionarTarefa);
inputNovaTarefa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        botaoAdicionar.click();
    }
});
