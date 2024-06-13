// tomamos de html todos los elem. q vamos a utilizar
const borde = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

// game settings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};

// mapeo de direcciones
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1
};

// variables del juego
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const starGame = () => {
    snake = ['00','01','02','03'];
    score = snake.length;
    direction = 'ArrowRight';
    //estructura de datos donde vamos a guardar la info del juego
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
    console.log(boardSquares);
    board.innerHTML = '';
    emptySquares = [];
}