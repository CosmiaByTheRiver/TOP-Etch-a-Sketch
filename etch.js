
const container = document.getElementById('container');


                // MAKEGRID FUNCTION \\
// ----------------------------------------------- \\
let generate;

function makeGrid(rows = 16, cols = 16) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        generate = document.createElement('div');
        container.appendChild(generate).className = 'grid-unit';
    }
}

makeGrid();

// -------------------------------------------------------------------- \\



                // CHANGE CELL COLOR - MOUSEOVER \\
// ----------------------------------------------- \\

const cellColor = document.querySelectorAll('.grid-unit');

cellColor.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'pink';
    })
})

// -------------------------------------------------------------------- \\



                // GRID DIMENSION POPUP \\
// ----------------------------------------------- \\


const dimension = document.querySelector('#button');

let dimInput;

    dimension.addEventListener('click', () => {
        dimInput = prompt("Enter desired grid dimension");

        function changeGrid() {
            if (dimInput <= 100) {
            // container.remove('style');
            container.setAttribute('style', `--grid-rows: ${dimInput}; --grid-cols:
            ${dimInput}`);

            };
        };

        changeGrid();
    });



// -------------------------------------------------------------------- \\
