const menuScreen = document.querySelector('#menu-screen');
const gameScreen = document.querySelector('#game-screen');
const enterButton = document.querySelector('#enter-button');
const backMenuButton = document.querySelector('#back-menu');

function enterHotel() {
  menuScreen.classList.add('is-leaving');
  window.setTimeout(() => {
    menuScreen.classList.add('is-hidden');
    gameScreen.classList.remove('is-hidden');
  }, 850);
}

function returnToMenu() {
  gameScreen.classList.add('is-hidden');
  menuScreen.classList.remove('is-hidden', 'is-leaving');
}

enterButton.addEventListener('click', enterHotel);
backMenuButton.addEventListener('click', returnToMenu);

// Próxima etapa: conectar os cenários, personagens, diálogos e pistas
// depois que a cronologia e o roteiro forem definidos.
