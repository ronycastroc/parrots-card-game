/* variaveis globais */

let quantidade = prompt('Digite o número de cartas. O numero deve ser par e de 4 a 14 cartas.')
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

let cartaSelec; // <-- cartaSelecionada armazenda a primeira carta selecionada e elemento armazena a segunda e compara 
function viraCarta(elemento) {
    elemento.classList.add('virada')
    
    if (cartaSelec != null && cartaSelec != elemento) {
        cartasIguais(cartaSelec, elemento)
}
    
    else {
        cartaSelec = elemento;
    }
    console.log(cartaSelec)
    console.log(elemento)
}

function cartasIguais(carta1, carta2) {
    cartaSelec = null

    if(carta1.querySelector('.verso .papagif').src === carta2.querySelector('.verso .papagif').src) {
        carta1.removeAttribute('onclick')
        carta1.removeAttribute('onclick')
    }

    else {
        setTimeout(() => {
            carta1.classList.remove('virada')
            carta2.classList.remove('virada')
        }, 1000)
        
    }
}


