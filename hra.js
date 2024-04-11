let currentPlayer = 'circle';

const clickButton = (evt) => {
  const button = evt.target;
  evt.target.disabled === true;

   if (currentPlayer === 'circle')
   {
    button.classList.add('square-circle');
    currentPlayer = 'cross';
    document.getElementById('player').src = 'cross-black.svg';
   } 

   else {
    button.classList.add('square-cross');
    currentPlayer = 'circle';
    document.getElementById('player').src = 'circle-black.svg';
   }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', clickButton);

document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', clickButton);
  
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', clickButton);



  
