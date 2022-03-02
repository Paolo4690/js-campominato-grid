const btnPlay = document.querySelector('#play');
const optDifficolta = document.querySelector('#difficolta');
const container = document.querySelector('#container-campo-minato')
const main = document.querySelector('main');


btnPlay.addEventListener('click', function() {
    main.classList.add('main-visible');
    container.innerHTML = ''
    if (optDifficolta.value == 'facile') {
        for (let i = 1; i <= 49; i++) {
            const squareFacile = document.createElement('div');
            squareFacile.classList.add('square-facile');
            squareFacile.innerHTML = i
            container.append(squareFacile)
        }
    } else if (optDifficolta.value == 'medio') {
        for (let i = 1; i <= 81; i++) {
            const squareMedio = document.createElement('div');
            squareMedio.classList.add('square-medio');
            squareMedio.innerHTML = i
            container.append(squareMedio)
        }
    }else {
        for (let i = 1; i <= 100; i++) {
            const squareDifficile = document.createElement('div');
            squareDifficile.classList.add('square-difficile');
            squareDifficile.innerHTML = i
            container.append(squareDifficile)
        }
    }
});