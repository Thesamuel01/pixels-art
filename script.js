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

    const elementTarget = event.target;
    const hasClassColor = elementTarget.className.includes('color');

    if (hasClassColor) {
      removeSelectedClass(colorItems);

      elementTarget.classList.add('selected');
    }
  });
}

addSelectClassInTheElement();