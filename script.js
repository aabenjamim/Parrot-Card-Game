
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
        <div class="carta">
            <div class="container" onclick="virarCarta(this)">
                <div  class="back">
                    <img src="./midia/imagens/back.png">
                </div>
                <div class="front">
                    <img src="./midia/imagens/${listaNovaEmbaralhada[i]}">
                </div>    
            </div>
        </div>
        `
    }
}

distribuirCartas()

function virarCarta(elemento){
    elemento.classList.add('transicao')
 }
cd 