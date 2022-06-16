let quantidade = prompt('Digite o número de cartas. O numero deve ser par e de 4 a 14 cartas.')
let array = [
    `<div class="carta 1" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/bobrossparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 1" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/bobrossparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 2" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/explodyparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 2" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/explodyparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 3" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/fiestaparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 3" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/fiestaparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 4" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/metalparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 4" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/metalparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 5" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/revertitparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 5" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/revertitparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 6" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/tripletsparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 6" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/tripletsparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 7" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/unicornparrot.gif" alt="">
    </div>
</div>`,

`<div class="carta 7" onclick="viraCarta(this)">
    <div class="parrot">
        <img class="papa" src="img/front.png" alt="">
    </div>
    <div class="gif escondido">
        <img src="img/unicornparrot.gif" alt="">
    </div>
</div>`
]
let cartas = document.querySelector('.cartas')

/* aqui vai a condição para entrar no jogo */
while (quantidade%2 == 1 || quantidade < 4 || quantidade > 14 || isNaN(quantidade) == true) {
    quantidade = prompt('Digite um numero válido. O numero deve ser par e de 4 a 14 cartas.')
    
} alert('Tudo certo, pode jogar :)')

/* aqui recebe a quantidade de cartas que o jogador escolheu  */
let calcCartas = quantidade - 14
let resCartas = array.slice(-calcCartas)
resCartas.sort(comparador)
console.log(resCartas)
cartas.innerHTML = resCartas

function comparador() { 
	return Math.random() - 0.5; 
}

/* aqui vai a função para virar as cartas (incompleto) */
function viraCarta(elemento) {
    let fren = document.querySelector('.papa')
    let tras = document.querySelector('.gif')
    
    elemento.classList.toggle('virada')
    fren.classList.toggle('escondido')
    tras.classList.toggle('escondido')
    
}
