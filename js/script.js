const btnPlay = document.querySelector('#play');
const optDifficolta = document.querySelector('#difficolta');
const container = document.querySelector('#container-campo-minato')

btnPlay.addEventListener('click', function() {
    container.innerHTML = ''
    if (optDifficolta.value == 'facile') {
        griglia(49)
    } else if (optDifficolta.value == 'medio') {
        griglia(81)
    }else {
        griglia(100)
    }
});

function griglia(numero) {     
    for (let i = 1; i <= numero; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = i;
        container.append(square);
        if (numero == 49) {
            square.classList.add('facile');
        }   else if (numero == 81) {
            square.classList.add('medio');
        }   else {
            square.classList.add('difficile');
        }
        square.addEventListener('click', function() {
            square.classList.add('color-cell')
        })
    }
}