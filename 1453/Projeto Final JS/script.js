const inputNovaTarefa = document.getElementById("addInput");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listaDeTarefas = document.getElementById("listarTarefas");

function adicionarTarefa() {
    const inputText = inputNovaTarefa.value.trim();
    if (!inputText) {
        alert("Digite uma tarefa!");
        return;
    }

    const addNovaTarefa = document.createElement("li");
    addNovaTarefa.classList.add("itemDaLista");
    addNovaTarefa.textContent = inputText;
    inputNovaTarefa.value = "";

    const botoes = [
        {
            texto: "Excluir",
            classe: "botaoDelete",
            aoClicar: () => listaDeTarefas.removeChild(addNovaTarefa),
        },
        {
            texto: "Editar",
            classe: "botaoEdit",
            aoClicar: () => {
                const itemEditado = prompt(
                    "Edite sua tarefa",
                    addNovaTarefa.firstChild.textContent
                );
                if (!itemEditado) {
                    alert("Sua tarefa não foi modificada!");
                    return;
                }
                addNovaTarefa.firstChild.textContent = itemEditado;
            },
        },
        {
            texto: "Subir Item",
            classe: "botaoSubir",
            aoClicar: () => {
                const anterior = addNovaTarefa.previousElementSibling;
                if (anterior) {
                    listaDeTarefas.insertBefore(addNovaTarefa, anterior);
                }
            },
        },
        {
            texto: "Descer Item",
            classe: "botaoDescer",
            aoClicar: () => {
                const proximo = addNovaTarefa.nextElementSibling;
                if (proximo) {
                    listaDeTarefas.insertBefore(proximo, addNovaTarefa);
                }
            },
        },
    ];

    for (let i = 0; i < botoes.length; i++) {
        const config = botoes[i];
        const botao = document.createElement("button");
        botao.classList.add(config.classe);
        botao.textContent = config.texto;
        botao.onclick = config.aoClicar;
        addNovaTarefa.appendChild(botao);
    }

    listaDeTarefas.appendChild(addNovaTarefa);
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

inputNovaTarefa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        botaoAdicionar.click();
    }
});
