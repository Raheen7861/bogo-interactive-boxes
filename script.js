const boxes = document.querySelectorAll('.box');
const radios = document.querySelectorAll('input[type=radio]');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    boxes.forEach((box) => {
      box.classList.remove('expanded');
    });

    const selectedBox = radio.closest('.box');
    if (selectedBox.classList.contains('expandable')) {
      selectedBox.classList.add('expanded');
    }
  });
});
