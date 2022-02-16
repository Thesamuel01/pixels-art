const pixelBoard = document.querySelector('#pixel-board');
const colorItems = document.querySelectorAll('.color');

function removeSelectedClass() {
  for (let index = 0; index < colorItems.length; index += 1) {
    const element = colorItems[index];

    if (element.className.includes('selected')) {
      element.classList.remove('selected');
    }
  }
}

function addSelectClassInTheElement() {
  const colorPallete = document.querySelector('#color-palette');

  colorPallete.addEventListener('click', (event) => {
    event.preventDefault();

    const element = event.target;
    const hasClassColor = element.className.includes('color');

    if (hasClassColor) {
      removeSelectedClass();

      element.classList.add('selected');
    }
  });
}

function changeBackgroundColor(element, color) {
  const pixel = element;

  pixel.style.backgroundColor = color;
}

function changePixelColor() {
  pixelBoard.addEventListener('click', (event) => {
    event.preventDefault();

    const colorSelected = document.querySelector('.selected');
    const clickedElement = event.target;
    // Trecho basedo artigo do link:https://zellwk.com/blog/css-values-in-js/
    const color = getComputedStyle(colorSelected).backgroundColor;
    const hasClassPixels = clickedElement.className.includes('pixel');

    if (hasClassPixels) {
      changeBackgroundColor(clickedElement, color);
    }
  });
}

function clearPixelBoard() {
  const button = document.querySelector('#clear-board');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const pixels = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixels.length; index += 1) {
      const element = pixels[index];
      element.style.backgroundColor = 'white';
    }
  });
}

function createPixel() {
  const div = document.createElement('li');
  div.classList.add('pixel');

  return div;
}

function createLine(lines) {
  const line = document.createElement('div');
  line.classList.add('line');

  for (let index = 0; index < lines; index += 1) {
    const pixel = createPixel();

    line.appendChild(pixel);
  }

  return line;
}

function createBoard(lines) {
  for (let index = 0; index < lines; index += 1) {
    const line = createLine(lines);

    pixelBoard.appendChild(line);
  }
}

function removeOldBoard() {
  const lines = document.querySelectorAll('.line');

  for (let index = 0; index < lines.length; index += 1) {
    const element = lines[index];

    pixelBoard.removeChild(element);
  }
}

function createNewBoard() {
  const generateButton = document.querySelector('#generate-board');
  generateButton.addEventListener('click', (event) => {
    event.preventDefault();

    const inputValue = document.querySelector('#board-size').value;
    let boardSize = inputValue < 5 ? 5 : inputValue;
    boardSize = inputValue > 50 ? 50 : boardSize;

    if (inputValue === '') {
      alert('Board inválido!');
      return;
    }

    removeOldBoard();
    createBoard(boardSize);
  });
}

function generatePalleteColors() {
  for (let index = 1; index < colorItems.length; index += 1) {
    const element = colorItems[index];
    const firstRandomNumber = Math.ceil(Math.random() * 255);
    const secondRandomNumber = Math.ceil(Math.random() * 255);
    const thirdRandomNumber = Math.ceil(Math.random() * 255);
    const randomColor = `rgb(${firstRandomNumber}, ${secondRandomNumber}, ${thirdRandomNumber})`;

    element.style.backgroundColor = randomColor;
  }
}

window.onload = () => {
  const defaultNumberOfLines = 5;

  createBoard(defaultNumberOfLines);
  generatePalleteColors();
};

addSelectClassInTheElement();
changePixelColor();
clearPixelBoard();
createNewBoard();
