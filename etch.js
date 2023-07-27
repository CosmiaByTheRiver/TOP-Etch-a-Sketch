const container = document.getElementById('container');
let cellColor;


                // MAKEGRID FUNCTION \\
// ----------------------------------------------- \\

function makeGrid(rows = 16, cols = 16) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let generate = document.createElement('div');
        container.appendChild(generate).className = 'grid-unit';
    }
    changeColors();
}

makeGrid();

// -------------------------------------------------------------------- \\





          // CHANGE CELL COLOR - MOUSEOVER \\
// ----------------------------------------------- \\

function numGenerator(max) {
    return Math.floor(Math.random() * (max + 1));
}


function randomRgbColor() {
    let r = numGenerator(255);
    let g = numGenerator(255);
    let b = numGenerator(255);
    return [r, g, b];
}


function changeColors() {
    cellColor = document.querySelectorAll('.grid-unit');
    cellColor.forEach((e) => {
        e.addEventListener('mouseover', () => {
            let rgb = randomRgbColor();
            e.style.backgroundColor = 'rgb(' + rgb.toString() + ')';
        })
    })
}
changeColors();


// -------------------------------------------------------------------- \\



                // GRID DIMENSION POPUP \\
// ----------------------------------------------- \\


const dimension = document.querySelector('#button');

let dimInput;

    dimension.addEventListener('click', () => {
        dimInput = prompt("Enter desired grid dimension");

        function changeGrid() {

            if (dimInput <= 100) {
                cellColor.forEach((e) => {
                    e.remove();
                });

                for (i = 0; i < (dimInput * dimInput); i++) {
                    makeGrid(dimInput, dimInput);
                }
            };
        };
        changeGrid();
    });
