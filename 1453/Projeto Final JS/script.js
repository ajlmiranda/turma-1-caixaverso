let listaDeMercado = [];

function adicionar() {
    const novoItem = prompt("Digite o novo item da lista de mercado");

    listaDeMercado.push(novoItem);

    menu();
}
function remover() {
    const itemRemover = prompt("Digite o item para ser removido");

    const listaFiltrada = listaDeMercado.filter((item) => item !== itemRemover);
    listaDeMercado = listaFiltrada;

    menu();
}
function editar() {
    const paraEditar = prompt("Digite o nome do item para editar");
    const novoNome = prompt("Digite o novo nome do item a ser editado");

    const listaEditada = listaDeMercado.map((item) => {
        if (item === paraEditar) {
            return novoNome;
        } else {
            return item;
        }
    });
    listaDeMercado = listaEditada;

    menu();
}
function listar() {
    console.log(listaDeMercado);

    menu();
}

function menu() {
    const promptOpcao = prompt(
        "1. Adiciona 2.Remover 3.Editar 4.Listar 5.Sair"
    );

    switch (promptOpcao) {
        case "1":
            adicionar();
            break;
        case "2":
            remover();
            break;
        case "3":
            editar();
            break;
        case "4":
            listar();
            break;
        case "5":
            return;
        default:
            menu();
            break;
    }
}

menu();
