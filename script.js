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

function changeBackgroundColor(clickedElement, colorSelected) {
  // Trecho basedo artigo do link:https://zellwk.com/blog/css-values-in-js/
  const style = getComputedStyle(colorSelected);
  const color = style.backgroundColor;
  const element = clickedElement;

  element.style.backgroundColor = color;
}

function changePixelColor() {
  const pixelBoard = document.querySelector('#pixel-board');

  pixelBoard.addEventListener('click', (event) => {
    event.preventDefault();

    const colorSelected = document.querySelector('.selected');
    const clickedElement = event.target;
    const hasClassPixels = clickedElement.className.includes('pixel');

    if (hasClassPixels) {
      changeBackgroundColor(clickedElement, colorSelected);
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

addSelectClassInTheElement();
changePixelColor();
clearPixelBoard();
