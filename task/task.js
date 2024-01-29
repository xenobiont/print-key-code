// Your code here
const title = document.createElement('h1');

title.innerText = 'Нажмите любую клавишу.';

document.body.prepend(title);

window.addEventListener('keydown', function (event) {
  title.innerText = `Нажатая клавиша: ${event.key}`;
});