/* Default values */

const DEFAULT_SIZE = 64;
const DEFAULT_COLOR_BRUSH = '#eee';
const DEFAULT_COLOR_BACKGROUND = "#555";

/* Adjustable values */

let gridSize = DEFAULT_SIZE;
let brushColor = DEFAULT_COLOR_BRUSH;
let backgroundColor = DEFAULT_COLOR_BACKGROUND;

/* Set default color-picker "color" value in HTML */

const colorPickerBrush = document.getElementById('color-picker-brush');
colorPickerBrush.setAttribute('color', brushColor);
const colorPickerBackground = document.getElementById('color-picker-background');
colorPickerBackground.setAttribute('color', backgroundColor);

/* Initialize/Change background color */

const gridContainer = document.getElementById('grid-container');

function changeBgColor(backgroundColor){
    gridContainer.style.backgroundColor = backgroundColor;
}

changeBgColor(backgroundColor);

/* Initialize grid + create square + draw */

function createGrid(gridSizeTmp){
    for(let i = 0; i < gridSizeTmp*gridSizeTmp; i++){
        const gridItem = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${gridSizeTmp}, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${gridSizeTmp}, 1fr)`
        gridContainer.appendChild(gridItem);
    }

    const squares = gridContainer.querySelectorAll('div');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = brushColor;
        });
    });
}

createGrid(gridSize);

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
    const squares = gridContainer.querySelectorAll('div');
    squares.forEach((element) => element.style.backgroundColor = "")
})

/* Eraser  */

const erase = document.getElementById('eraser');
erase.addEventListener('click', ()=>{
    brushColor = '';
})

/* Toggle grid lines */

const toggleGridLinesButton = document.getElementById('toggle-grid-lines');
toggleGridLinesButton.addEventListener('click', () => {
    const squares = gridContainer.querySelectorAll('div');
    squares.forEach((element) => element.classList.toggle('square-grid-lines'));
})

/* Change grid size */

const sizeSlider = document.getElementById('size-slider');
const sizeValue = document.getElementById('size-value');

sizeSlider.value = gridSize;
sizeValue.innerHTML = sizeSlider.value + " x " + sizeSlider.value;
sizeSlider.addEventListener('input', (e)=>{
    gridContainer.innerHTML='';
    sizeValue.innerHTML = sizeSlider.value + " x " + sizeSlider.value;
    createGrid(e.target.value);
})