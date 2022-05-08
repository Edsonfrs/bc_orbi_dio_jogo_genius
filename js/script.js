let order = [];
let clickedOrder = [];
let score = 0;



const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// Criação de ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acendendo a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Checando se os botões clicados são os mesmos que a ordem gerada pelo jogo
 
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// Liberando o click para o usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

// Retornando a s cores do jogo
let createColorElement = (color) => {

    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red; 
    } else if (color == 2) {
        return yellow; 
    } else if (color == 3)  {
        return blue;
    }

}

// Subindo de nível: função NextLevel()

let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Perdendo o Jogo: GAME OVER!!!

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê foi derrotado!Clique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Iniciando o jogo

let playGame = () => {
    alert (`Bem vindo a GENIUS! Iniciando um novo jogo! `);
    score = 0;

    nextLevel();
}


// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

/*
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
*/

// Evento de climes para chamar as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);



// Inicio do jogo
playGame();




