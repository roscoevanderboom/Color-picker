// 
// variable
// single elements
let header = document.querySelector('#header');
let container = document.querySelector('#container');
let colorDisplay = document.querySelector('#colorDisplay');
let resestBtn = document.querySelector('#reset');
let difficulty = document.querySelector('#difficulty');
let message = document.querySelector('#message');


// functions

function createDiv(num) {
    for (i = 0; i < num; i++) {
        var div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
}

function countSquares() {
    squares = document.querySelectorAll('.square');
    return squares;
}

function generateRandomColors(num) {
    var arr = [];
    for ( i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var result = `rgb(${r}, ${g}, ${b})`;
    return result;
}

function pickColor(colors) {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color) {
    squares = countSquares();
    squares.forEach((val) => {
        val.style.backgroundColor = color;
    });
}

function setGame(num) {
    container.innerHTML = '';
    header.style.backgroundColor = 'steelblue'; 
    let colors = generateRandomColors(num);
    let pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    createDiv(num);
    squares = countSquares();

    squares.forEach((val, i) => {
        val.style.backgroundColor = colors[i];        
        val.addEventListener('click', function () {
            let y = this.style.backgroundColor;
            if (y == pickedColor) {
                message.textContent = 'Correct!';
                resestBtn.textContent = 'Play again?';
                header.style.backgroundColor = pickedColor;                
                changeColors(pickedColor);
            } else {
                this.style.backgroundColor = '#232323';
                message.textContent = 'Try again!';
            }
        });
    });
}


// Apply settings to variables

difficulty.addEventListener('change', () => {    
    num = difficulty.value;    
    setGame(num);
});

resestBtn.addEventListener('click', () => {    
    container.innerHTML = '';
    message.textContent = '';
    num = squares.length;
    setGame(num);
});



