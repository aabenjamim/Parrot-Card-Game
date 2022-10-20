
let numeroDeCartas;

function PerguntarNumeroDeCartas(){

    const listaNumeroCartas = [4, 6, 8, 10, 12, 14]

    while ( listaNumeroCartas.indexOf(numeroDeCartas) == -1) {
        numeroDeCartas = Number(prompt("Com quantas cartas deseja jogar?"))
    }

}

PerguntarNumeroDeCartas()

const listaImagens = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 
 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif']

 let listaEmbaralhada = listaImagens.sort(comparador)

 function comparador() { 
	return Math.random() - 0.5; 
}

console.log(listaEmbaralhada)

function distribuirCartas(){
    const mesa = document.querySelector('.mesa-jogo')

    const listaNova = []

    for(let i = 0; numeroDeCartas/2 > i; i++){
        listaNova.push(listaEmbaralhada[i], listaEmbaralhada[i])
    }

    let listaNovaEmbaralhada = listaNova.sort(comparador)

    console.log(listaNovaEmbaralhada)

    for(let i = 0; numeroDeCartas > i; i++){
        mesa.innerHTML += `
        <div class="carta" onclick="virarCarta(this)">
            <img src="./midia/imagens/back.png" class="back">
            <img src="./midia/imagens/${listaNovaEmbaralhada[i]}" class="front escondido">
        </div>
        `
    }
}

distribuirCartas()

function virarCarta(elemento){
    const imagemSome = elemento.querySelector('.back')
    const imagemAparece = elemento.querySelector('.front')

    imagemSome.classList.add('escondido')
    imagemAparece.classList.remove('escondido')


    console.log(imagemSome)
    console.log(imagemAparece)
 }
