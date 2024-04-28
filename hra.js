import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const clickButton = (evt) => {
  const button = evt.target;
  evt.target.disabled === true;

   if (currentPlayer === 'circle')
   {
    button.classList.add('square-circle');
    currentPlayer = 'cross';
    document.getElementById('player').src = 'cross-black.svg';
   } else {
    button.classList.add('square-cross');
    currentPlayer = 'circle';
    document.getElementById('player').src = 'circle-black.svg';
   }
const arenaElm = Array.from(buttons);
const arena = arenaElm.map((button) =>
 {
  if (button.classList.contains('square-circle')) {
    return 'o';
  } 
    else if (button.classList.contains('square-cross')) {
    return 'x';
  } 
  else {
    return '_';
  }
});

const champion = () => {
  const winner = champion(arena);
  
   if (winner === 'o') {
    alert('Congrats O!');
    location.reload();
  } 
   else if (winner === 'x') {
    alert('Congrats X!');
    location.reload();
  } 
   else if (winner === 'tie') {
    alert('DRAW!');
    location.reload();
  }
  setTimeout(alertTie, 500);
};
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', clickButton);
});

const response = await fetch("https://piskvorky.czechitas-podklady.cz/api/suggest-next-move",
 {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      board: arena,
      player: 'x', 
    })
  });
