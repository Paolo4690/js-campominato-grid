const btnPlay = document.querySelector('#play');
const optDifficolta = document.querySelector('#difficolta');
const container = document.querySelector('#container-campo-minato')

btnPlay.addEventListener('click', function() {
    container.innerHTML = ''
    if (optDifficolta.value == 'facile') {
        for (let i = 1; i <= 49; i++) {
            const squareFacile = document.createElement('div');
            squareFacile.classList.add('square-facile');
            squareFacile.innerHTML = i
            container.append(squareFacile)
            squareFacile.addEventListener('click', function() {
                squareFacile.classList.add('color-cell')
            })
        }
    } else if (optDifficolta.value == 'medio') {
        for (let i = 1; i <= 81; i++) {
            const squareMedio = document.createElement('div');
            squareMedio.classList.add('square-medio');
            squareMedio.innerHTML = i
            container.append(squareMedio)
            squareMedio.addEventListener('click', function() {
                squareMedio.classList.add('color-cell')
            })
        }
    }else {
        for (let i = 1; i <= 100; i++) {
            const squareDifficile = document.createElement('div');
            squareDifficile.classList.add('square-difficile');
            squareDifficile.innerHTML = i
            container.append(squareDifficile)
            squareDifficile.addEventListener('click', function() {
                squareDifficile.classList.add('color-cell')
            })
        }
    }
});