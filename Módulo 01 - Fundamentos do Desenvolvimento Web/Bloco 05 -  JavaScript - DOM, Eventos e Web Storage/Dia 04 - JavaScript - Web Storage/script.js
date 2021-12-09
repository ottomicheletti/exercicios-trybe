window.onload = function () {
  function textBackgroundColor(color) {
    let textBox = document.getElementById('textBox');
    textBox.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }

  function textColor(color) {
    let text = document.getElementById('text');
    text.style.color = color;
    localStorage.setItem('textColor', color);
  }

  function fontHeight(size) {
    let font = document.getElementById('text');
    font.style.fontSize = size;
    localStorage.setItem('fontSize', size);
  }

  function line(height) {
    let line = document.getElementById('text');
    line.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
  }

  function fontFamily(family) {
    let fontFamily = document.getElementById('text');
    fontFamily.style.fontFamily = family;
    localStorage.setItem('fontFamily', family);
  }

  // cor de fundo do texto
  document.getElementById('theme').addEventListener('change', function () {
    textBackgroundColor(this.value);
  });

  // cor das letras do texto
  document.getElementById('textColor').addEventListener('change', function () {
    textColor(this.value);
  });

  // tamanho das letras do texto
  document.getElementById('textHeight').addEventListener('change', function () {
    fontHeight(this.value);
  });

  // altura das linhas do texto
  document.getElementById('lineHeigth').addEventListener('change', function () {
    line(this.value);
  });

  // estilo da fonte
  document.getElementById('fontFamily').addEventListener('change', function () {
    fontFamily(this.value);
  });

  function initialize() {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) textBackgroundColor(backgroundColor);

    let fontColor = localStorage.getItem('textColor');
    if (fontColor) textColor(fontColor);

    let fontSize = localStorage.getItem('fontSize');
    if (fontSize) fontHeight(fontSize);

    let lineHeight = localStorage.getItem('lineHeight');
    if (lineHeight) line(lineHeight);

    let family = localStorage.getItem('fontFamily');
    if (family) fontFamily(family);
  }

  initialize();
};

console.log(localStorage.length);
