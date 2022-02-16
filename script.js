function removeSelectedClass(colorItems) {
  for (let index = 0; index < colorItems.length; index += 1) {
    const element = colorItems[index];

    if (element.className.includes('selected')) {
      element.classList.remove('selected');
    }
  }
}

function addSelectClassInTheElement() {
  const colorPallete = document.querySelector('#color-palette');
  const colorItems = document.querySelectorAll('.color');

  colorPallete.addEventListener('click', (event) => {
    event.preventDefault();

    const element = event.target;
    const hasClassColor = element.className.includes('color');

    if (hasClassColor) {
      removeSelectedClass(colorItems);

      element.classList.add('selected');
    }
  });
}

function changeBackgroundColor(element, color) {
  const pixel = element;

  pixel.style.backgroundColor = color;
}

function changePixelColor() {
  const pixelBoard = document.querySelector('#pixel-board');

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

function fillLines(lines) {
  const pixelBoard = document.querySelector('#pixel-board');
  const line = document.createElement('div');
  line.classList.add('line');

  for (let index = 0; index < lines; index += 1) {
    const pixel = createPixel();

    line.appendChild(pixel);
  }

  pixelBoard.appendChild(line);
}

function removeOldBoard(pixelBoard) {
  const lines = document.querySelectorAll('.line');

  console.log('aqui');
  for (let index = 0; index < lines.length; index += 1) {
    const element = lines[index];
    console.log(pixelBoard);
    pixelBoard.removeChild(element);
  }
}

function createNewPixelBoard() {
  const generateButton = document.querySelector('#generate-board');
  generateButton.addEventListener('click', (event) => {
    event.preventDefault();

    const inputValue = document.querySelector('#board-size').value;
    const pixelBoard = document.querySelector('#pixel-board');

    if (inputValue === '') {
      alert('Board inválido!');
      return;
    }

    removeOldBoard(pixelBoard);

    for (let index = 0; index < inputValue; index += 1) {
      fillLines(inputValue);
    }
  });
}

window.onload = () => {
  const defaultNumberOfLines = 5;

  for (let index = 0; index < defaultNumberOfLines; index += 1) {
    fillLines(defaultNumberOfLines);
  }
};

addSelectClassInTheElement();
changePixelColor();
clearPixelBoard();
createNewPixelBoard();
