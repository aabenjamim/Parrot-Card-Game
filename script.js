
let numeroDeCartas;

function PerguntarNumeroDeCartas(){

    const listaNumeroCartas = [4, 6, 8, 10, 12, 14]

    while ( listaNumeroCartas.indexOf(numeroDeCartas) == -1) {
        numeroDeCartas = Number(prompt("Com quantas cartas deseja jogar?\nUtilize números pares entre 4 e 14"))
    }

}

PerguntarNumeroDeCartas()

const listaImagens = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 
 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif']

 let listaEmbaralhada = listaImagens.sort(comparador)

 function comparador() { 
	return Math.random() - 0.5; 
}

function distribuirCartas(){
    const mesa = document.querySelector('.mesa-jogo')

    const listaNova = []

    for(let i = 0; numeroDeCartas/2 > i; i++){
        listaNova.push(listaEmbaralhada[i], listaEmbaralhada[i])
    }

    let listaNovaEmbaralhada = listaNova.sort(comparador)

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

const lista = [];
let jogadas = 0;

let cartasAbertas = 0;

const paresCartas = [];

function virarCarta(elemento){
    elemento.classList.add('transicao')
    lista.push(elemento)

    jogadas++

    if(lista.length===2){
        setTimeout(desvirarCarta, 1000)
    }

 }

 function desvirarCarta(){

    const pos1 = lista[0].innerHTML
    const pos2 = lista[1].innerHTML

    if(pos1 !== pos2){
        while(lista.length!==0){
            lista[0].classList.remove('transicao')
            lista.shift()
        }
    } if(pos1 === pos2){

        cartasAbertas += 2;

        while(lista.length!==0){
            lista.shift()
        }

        FimDeJogo() 
    }


 }

 function FimDeJogo(){
    if(cartasAbertas===numeroDeCartas){
        alert(`Você ganhou em ${jogadas} jogadas!`)
    }
 }

//  function Recomecar(){
//     const recomecar = prompt('Gostaria de reiniciar o jogo?\nResponda com "sim" ou "não", escrito dessa maneira')

//     if(recomecar === 'sim'){
//         mesa.innerHTML = " "
//         return PerguntarNumeroDeCartas();
//     }
// }
 