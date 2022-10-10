const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#444';

let gridSize = DEFAULT_SIZE;
let brushColor = DEFAULT_COLOR;


const grid = document.getElementById('grid');


setupGrid(gridSize);


function setupGrid(size){
    for(let i = 0; i < size*size; i++){
        grid.innerHTML += "<div class='square'></div>";
    }
}

const squares = document.querySelectorAll('.square');   //grid is set up then, elements are selected (obviously)

squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = brushColor;
    });
});

/*
function setColor(){
    this.style.backgroundColor = "red";
}
*/