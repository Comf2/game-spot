// slider
const pickSymSlider = document.querySelector('.pick-sym-slider');

let sliderOnX = true;

const xSym = document.querySelector('#x-sym');
const oSym = document.querySelector('#o-sym');

xSym.onclick = () => {
  sliderOnX = true;
  checkSlider();
};
oSym.onclick = () => {
  sliderOnX = false;
  checkSlider();
};
//make it not toggle
function checkSlider() {
  if (sliderOnX) {
    pickSymSlider.style.setProperty('--slider-position', '0');
    oSym.style.color = '#a8bfc9';
    xSym.style.color = '#11242e';
  }
  if (!sliderOnX) {
    pickSymSlider.style.setProperty('--slider-position', '50%');
    xSym.style.color = '#a8bfc9';
    oSym.style.color = '#11242e';
  }
}

//init game
const newCpuGame = document.querySelector('.new-game-cpu');
newCpuGame.onclick = () => initBotDifficulty();

function initBotDifficulty() {
  const startGameContainer = document.querySelector('.start-game-container');
  const botDifficultyContainer = document.querySelector(
    '.bot-difficulty-container'
  );

  startGameContainer.style.display = 'none';
  botDifficultyContainer.style.display = 'flex';
}

const difficultyButtons = document.querySelectorAll('.difficulty-box button');
for (let i = 0; i < difficultyButtons.length; i++) {
  difficultyButtons[i].onclick = () => initCpuGame(i);
}
function initCpuGame(difficulty) {
  let pOneTeam;
  let pTwoTeam;
  sliderOnX ? (pOneTeam = 'x') : (pOneTeam = 'o');
  sliderOnX ? (pTwoTeam = 'o') : (pTwoTeam = 'x');

  let Op = 'cpu';
  let game = {
    pOneTeam: pOneTeam,
    pTwoTeam: pTwoTeam,
    pTwo: Op,
    difficulty: difficulty,
  };
  window.localStorage.setItem('gameConfig', JSON.stringify(game));
  window.location = './pages/game.html';
}
