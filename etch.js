
const container = document.getElementById('container');

// const rows = 16;
// const cols = 16;
// for (let i = 0; i < rowNum; i++) {
//     const row = document.createElement('div');
//     row.classList.add('row');

//     for (let j = 1; j < colsNum; j++) {
//         const cols = document.createElement('div');
//         cols.classList.add('cols');
//         row.appendChild(cols);
//     }
//     container.appendChild(row);
// };


                // MAKEGRID FUNCTION \\
// ----------------------------------------------- \\

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let generate = document.createElement('div');
        container.appendChild(generate).className = 'grid-unit';
    }
}

makeGrid(16, 16);

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

dimension.addEventListener('click', () => {
    prompt("Enter desired grid dimension");
})

// -------------------------------------------------------------------- \\
