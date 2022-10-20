
let numeroDeCartas;

function PerguntarNumeroDeCartas(){

    const listaNumeroCartas = [4, 6, 8, 10, 12, 14]

    while ( listaNumeroCartas.indexOf(numeroDeCartas) == -1) {
        numeroDeCartas = Number(prompt("Com quantas cartas deseja jogar?"))
    }

}

PerguntarNumeroDeCartas()

function distribuirCartas(){
    const mesa = document.querySelector('.mesa-jogo')

    for(let i = 0; numeroDeCartas > i; i++){
        mesa.innerHTML += `
        <div class="carta">
            <img src="./midia/imagens/back.png" class="back">
        </div>
        `
    }
}

distribuirCartas()
