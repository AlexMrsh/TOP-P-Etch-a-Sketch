/* Default values */

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR_BRUSH = '#fff';
const DEFAULT_COLOR_BACKGROUND = "#444";

/* Adjustable values */

let gridSize = DEFAULT_SIZE;
let brushColor = DEFAULT_COLOR_BRUSH;
let backgroundColor = DEFAULT_COLOR_BACKGROUND;

/* Set default color-picker "color" value in HTML */

const colorPickerBrush = document.getElementById('color-picker-brush');
colorPickerBrush.setAttribute('color', DEFAULT_COLOR_BRUSH);
const colorPickerBackground = document.getElementById('color-picker-background');
colorPickerBackground.setAttribute('color', DEFAULT_COLOR_BACKGROUND);

/* Initialize/Change background color */

const grid = document.getElementById('grid');
changeBgColor(backgroundColor);

function changeBgColor(backgroundColor){
    grid.style.backgroundColor = backgroundColor;
    console.log('ok');
}

/* Initialize grid */

function setupGrid(size){
    for(let i = 0; i < size*size; i++){
        grid.innerHTML += "<div class='square'></div>";
    }
}

setupGrid(gridSize);

/* Change squares color on hover */

const squares = document.querySelectorAll('.square');   //grid is set up then, elements are selected (obviously)

squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = brushColor;
    });
});

/* Change brush color */

colorPickerBrush.addEventListener('change', (e) => {
    brushColor = e.target.value;
});

/* Change background color */

colorPickerBackground.addEventListener('change', (e) => {
    backgroundColor = e.target.value;
    changeBgColor(backgroundColor);
})

/* Clear grid */

const clearGrid = document.getElementById('clear-grid');
clearGrid.addEventListener('click', ()=>{
    squares.forEach((element) => element.style.backgroundColor = "")
})