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
    cellEvent();
}

makeGrid();

// -------------------------------------------------------------------- \\





          // CHANGE CELL COLOR - MOUSEOVER \\
// ----------------------------------------------- \\

function cellEvent() {
    cellColor = document.querySelectorAll('.grid-unit');

cellColor.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'pink';
        });
    });
};

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
