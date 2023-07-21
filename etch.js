
const container = document.getElementById('container');


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let generate = document.createElement('div');
        container.appendChild(generate).className = 'grid-unit';
    }
}

makeGrid(16, 16);
