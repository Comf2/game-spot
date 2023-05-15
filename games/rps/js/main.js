const selectionButtons = document.querySelectorAll(
  '.rps-selection-container button'
);
const selectionOptions = ['rock', 'paper', 'scissors'];
for (let i = 0; i < selectionButtons.length; i++) {
  let button = selectionButtons[i];
  button.onmouseenter = () => addToolTip(button, selectionOptions[i]);
  button.onmouseleave = () => removeToolTip();

  button.onclick = () => checkWin(selectionOptions[i]);
}
const toolTip = document.querySelector('.tooltip');
function addToolTip(ele, msg) {
  toolTip.innerHTML = msg;
  toolTip.style.display = 'block';

  const rect = ele.getBoundingClientRect();
  toolTip.style.top = `${rect.top + rect.top / 4}px`;
  rect.left > window.innerWidth / 2
    ? (toolTip.style.left = `${rect.left - 100}px`)
    : (toolTip.style.left = `${rect.right - 25}px`);
}
function removeToolTip() {
  toolTip.style.display = 'none';
}

let animationPlaying = false;
let playerScore = 0;
let botScore = 0;
let tieScore = 0;
function checkWin(selection) {
  // if (animationPlaying) return;
  //^^^^^ this if will exist when animation added
  animationPlaying = true;
  const botSelection = getBotSelection();
  console.log('bot >>>', botSelection);
  console.log('player >>>', selection);
  if (selection === botSelection) {
    alert('you tied!');
    tieScore++;
  } else if (
    (selection === 'rock' && botSelection === 'paper') ||
    (selection === 'scissors' && botSelection === 'rock') ||
    (selection === 'paper' && botSelection === 'scissors')
  ) {
    alert('you lost!');
    botScore++;
  } else if (
    (selection === 'rock' && botSelection === 'scissors') ||
    (selection === 'paper' && botSelection === 'rock') ||
    (selection === 'scissors' && botSelection === 'paper')
  ) {
    alert('you won!');
    playerScore++;
  }
  updateScore();
}
function getBotSelection() {
  let selection = Math.floor(Math.random() * 3);
  return selectionOptions[selection];
}
function updateScore() {
  const scores = [playerScore, tieScore, botScore];
  const scoreEles = document.querySelectorAll('.rps-score h2');

  for (let i = 0; i < scoreEles.length; i++) {
    scoreEles[i].innerHTML = scores[i];
  }
}
