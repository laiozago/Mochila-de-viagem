const form = document.querySelector("#novoItem")
const lista = document.querySelector("#lista")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    let nome = evento.target.elements['nome'].value
    let quantidade = evento.target.elements['quantidade'].value

    criaElemento(nome,quantidade)
})

function criaElemento(nome, quantidade) {
  
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade
   
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

}