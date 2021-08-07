const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

start();

function start() {
  let numberOfSquares = prompt('how many squares per side?');

  if (numberOfSquares >= 80) {
    console.log('no');
  } else {
    makeRows(numberOfSquares);
  }
}

function makeRows(number) {
  container.style.setProperty('--grid-rows', number);
  container.style.setProperty('--grid-cols', number);
  for (i = 0; i < number * number; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
}

resetButton.addEventListener('click', reset);

function reset() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  start();

	//i have no fucking idea why i need to include this event listener function inside this reset function but it doesnt work if i dont so excuse this stupid ass code
  document.querySelectorAll('.grid-item').forEach((element) => {
    element.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'purple';
    });
  });
}

document.querySelectorAll('.grid-item').forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'purple';
  });
});
