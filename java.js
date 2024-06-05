const slide = document.querySelectorAll('.slide');
let current = 0;

function cls() {
  slide.forEach(s => s.style.display = 'none');
}

function showSlide(index) {
  slide[index].style.display = 'block';
  slide[index].style.opacity = '0.4';

  let x = 0.4;
  const intX = setInterval(function () {
    x += 0.1;
    slide[index].style.opacity = x;
    if (x >= 1) {
      clearInterval(intX);
    }
  }, 100);
}

function next() {
  cls();
  if (current === slide.length - 1) current = -1;
  current++;
  showSlide(current);
}

function prev() {
  cls();
  if (current === 0) current = slide.length;
  current--;
  showSlide(current);
}

function start() {
  cls();
  showSlide(current);
}

start();
