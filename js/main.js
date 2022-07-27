const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    let nome = evento.target.elements['nome'].value;
    let quantidade = evento.target.elements['quantidade'].value;

    criaElemento(nome,quantidade); //função chamando os eventos "nome ,quantidade"
})

//função cria elemento
function criaElemento(nome, quantidade) {

    // <li class="item"><strong>7</strong>Camisa</li>
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    //criando novo item para Numero strong....
    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = quantidade;
   
    //appendChild manipulando os dados para mostrar a tela...
    novoItem.appendChild(numeroItem); //mandando item camisa branca para html
    novoItem.innerHTML += nome; //recebendo item da camisa branca no html

    lista.appendChild(novoItem);

}
