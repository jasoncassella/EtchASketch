const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

makeRows(16);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeRows(number) {
  container.style.setProperty('--grid-rows', number);
  container.style.setProperty('--grid-cols', number);
  for (i = 0; i < number * number; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
  document.querySelectorAll('.grid-item').forEach((element) => {
    element.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = getRandomColor();
    });
  });
}

resetButton.addEventListener('click', reset);

function reset() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let numberOfSquares = prompt('how many squares per side?');

  if (numberOfSquares >= 80) {
    console.log('no');
  } else {
    makeRows(numberOfSquares);
  }
}
