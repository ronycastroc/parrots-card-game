/* variaveis globais */

let quantidade = prompt('Digite o número de cartas. O numero deve ser par e de 4 a 14 cartas.')
let click = 0
let acerto = 0
let cartas = document.querySelector('.cartas')
arrayCard = []
let arrayGif = [
    `<img class="papagif" src="img/bobrossparrot.gif" alt="">`,
    `<img class="papagif" src="img/bobrossparrot.gif" alt="">`,
    `<img class="papagif" src="img/explodyparrot.gif" alt="">`,
    `<img class="papagif" src="img/explodyparrot.gif" alt="">`,
    `<img class="papagif" src="img/fiestaparrot.gif" alt="">`,
    `<img class="papagif" src="img/fiestaparrot.gif" alt="">`,
    `<img class="papagif" src="img/metalparrot.gif" alt="">`,
    `<img class="papagif" src="img/metalparrot.gif" alt="">`,
    `<img class="papagif" src="img/revertitparrot.gif" alt="">`,
    `<img class="papagif" src="img/revertitparrot.gif" alt="">`,
    `<img class="papagif" src="img/tripletsparrot.gif" alt="">`,
    `<img class="papagif" src="img/tripletsparrot.gif" alt="">`,
    `<img class="papagif" src="img/unicornparrot.gif" alt="">`,
    `<img class="papagif" src="img/unicornparrot.gif" alt="">`
] 
    
/* aqui vai a condição para entrar no jogo*/

while (quantidade%2 == 1 || quantidade < 4 || quantidade > 14 || isNaN(quantidade)) {
    quantidade = prompt('Digite um numero válido. O numero deve ser par e de 4 a 14 cartas.')
    
} alert('Tudo certo, pode jogar :)')

/* aqui recebe a quantidade de cartas que o jogador escolheu  */



for (let c = 0; c < quantidade; c++) {
    let cardTemplate = `
    <div class="carta" onclick="viraCarta(this)">
        <div class="frente">
            <img class="papaimg" src="img/front.png" alt="">
        </div>
        <div class="verso escondido">
            ${arrayGif[c]}
        </div>
    </div>`

    arrayCard.push(cardTemplate)

}

arrayCard.sort(comparador)  
function comparador() { 
	return Math.random() - 0.5; 
} 
console.log(arrayCard)
cartas.innerHTML = arrayCard.join('')

/* aqui vai a função para virar as cartas */

let cartaSelec; // <-- cartaSelecionada armazenda a primeira carta selecionada e elemento armazena a segunda,
function viraCarta(elemento) {
    elemento.classList.add('virada')
    click++
    
    if (cartaSelec != null && cartaSelec != elemento) {
        cartasIguais(cartaSelec, elemento)
}
    
    else {
        cartaSelec = elemento;
    }
    console.log(cartaSelec)
    console.log(elemento)
    console.log(click)
}

/* verifica se a primeira e a segunda são iguais comparando os gifs */

function cartasIguais(carta1, carta2) {
    cartaSelec = null

    if(carta1.querySelector('.verso .papagif').src === carta2.querySelector('.verso .papagif').src) {
        carta1.removeAttribute('onclick')
        carta1.removeAttribute('onclick')
        acerto += 2
        
        if (quantidade == acerto) {
            
            setTimeout (function() {
                alert(`Você ganhou em ${click/2} jogadas e ${segundos} segundos `)
                jogarDeNovo()
            }, 500)
            
            clearInterval(idInterval)
        }

    }

    else {
        setTimeout(function() {
            carta1.classList.remove('virada')
            carta2.classList.remove('virada')
        }, 1000)
        
    }
}

function jogarDeNovo () {
    let jogar = prompt('Deseja jogar novamente? digite "sim" ou "não"')

    if (jogar === 'sim') {
        window.location.reload()
    }

    else {
        alert('Ok, até a proxima!')
    }

}

    let segundos = 0
    let idInterval = 0
      
    function contarTempo() {
        idInterval = setInterval(adicionarContador, 1000)
      }

      function adicionarContador() {
        segundos++;
        document.querySelector(".contador").innerHTML = segundos
        
      } contarTempo()


