/* array para armazenar os amigos na lista de sorteados */
let listaNomes = [];
/* variável para "capturar o que foi digitado no input" */
let amigo = document.querySelector(".input-name");
/* listar amigos na lista (UL) */
let listaAmigos = document.querySelector("#listaAmigos");
/* "capturar" o campo no qual aparece o amigo sorteado */
let campoSortear = document.querySelector(".result-list");
/* variável que armazena o amigo sorteado */
let amigoSorteado;

/* funções */
function adicionarAmigo() {
    /* verificar se o nome nao está em branco */
    if (amigo.value == '') {
        alert("Insira um nome para poder adicionar na lista");
    } else {
        /* Armazenar numa variável a criação de uma nova li para, posteriormente, inserir os amigos adicionados no input */
        let li = document.createElement("li");
        /* armezenar o valor do input(amigo digitado) no array de amigos */
        listaNomes.push(amigo.value);
        /* mostrar o texto com o nome do amigo que o usuário digitou */
        li.innerText = ` - ${amigo.value} -`;
        /* inserir o elemento criado na tela */
        listaAmigos.append(li);
        /* Após digitar, limpar a caixa do input */
        limpar();
    }



}
function sortearAmigo() {
    /* Sortar índice do amigo que será sorteado */
    /* variável que vai armazenar o número do indice aleatório */
    let sorteIndex = parseInt(Math.random() * listaNomes.length - 1);
    /* assim como na função adicionarAmigo, aqui será criado um li */
    let li = document.createElement("li");
    /* escrever nome do amigo sorteado dentro da li*/
    li.innerText = `amigo sorteado foi ${listaNomes[sorteIndex]}`
    /* atribuir o nome do amigo sorteado de acordo com o índice aleatório usado */
    amigoSorteado = listaNomes[sorteIndex];
    /* inserir o elemento criado na tela/página */
    campoSortear.append(li);


}

function limpar() {
    amigo.value = '';
}