let produtos 

window.onload = function(){
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)

    var dataEntrada = new Date(user.dataEntrada);
    var dataFormatada = dataEntrada.toLocaleString("pt-BR", {
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour:"2-digit",
        minute:"2-digit",
    })

    document.getElementById("perfil").innerText = dataFormatada
    document.getElementById("user").innerText = user.name
    document.getElementById("idPerfil").innerText = user.id
}

document.addEventListener("DOMContentLoaded", function(){
    fetch('../Dados/mock.json')
        .then((response) => response.json())
        .then((data) => {
            produtos = data
            // console.log(data)


            const produtosContainer = document.getElementById('produtos-container')
            produtos.forEach((produto, index) => {

                const card = document.createElement('div')
                card.className = 'card'
                card.style.width = '18rem'
                card.style.marginRight = '10px'

             const imagem = document.createElement('img')
                card.src = produto.image
                imagem.className = 'card-img-top'

                const cardBody = document.createElement('div')
                    cardBody.className = 'card-body'

                    const cardTitle = document.createElement('h5')
                    cardTitle.className = 'card-text'
                    cardTitle.textContent = produto.descricao



                const cardText = document.createElement('p')
                    cardText.className = 'card-text'
                    cardText.textContent = 'Preço: $' + produto.preco.toFixed(2)
                    

                const btnAdicionarAoCarrinho = document.createElement('a')  
                    btnAdicionarAoCarrinho.href ='#'
                    btnAdicionarAoCarrinho.className = 'btn btn-primary btn-adicionar-ao-carrinho'
                    btnAdicionarAoCarrinho.textContent = "Adicionar ao carrinho"
                    btnAdicionarAoCarrinho.setAttribute('data-indice', index)

            
                    cardBody. appendChild(cardTitle)
                    cardBody. appendChild(cardText)
                    cardBody. appendChild(btnAdicionarAoCarrinho)

                    card.appendChild(imagem)
                    card.appendChild(cardBody)
                    produtosContainer. appendChild(card)

            })
        }).catch((error) => console.error('Erro ao carregar dados', ))

})