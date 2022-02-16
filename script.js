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

function changeBackgroundColor(elementClicked, colorSelected) {
  // Trecho basedo artigo do link:https://zellwk.com/blog/css-values-in-js/
  const style = getComputedStyle(colorSelected);
  const color = style.backgroundColor;
  const element = elementClicked;

  element.style.backgroundColor = color;
}

function changePixelColor() {
  const pixelBoard = document.querySelector('#pixel-board');

  pixelBoard.addEventListener('click', (event) => {
    event.preventDefault();

    const colorSelected = document.querySelector('.selected');
    const elementClicked = event.target;
    const hasClassPixels = elementClicked.className.includes('pixel');

    if (hasClassPixels) {
      changeBackgroundColor(elementClicked, colorSelected);
    }
  });
}

addSelectClassInTheElement();
changePixelColor();
