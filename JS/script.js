ScrollReveal().reveal('.container1', {
  delay: 300,        // Atraso de 300ms antes da animação
  distance: '50px',  // Distância do movimento (em pixels)
  origin: 'bottom',  // O elemento aparece vindo de baixo
  duration: 1000,    // Tempo da animação (em milissegundos)
  easing: 'ease-in-out', // Efeito de transição
});

ScrollReveal().reveal('.container2', {
  delay: 300,        // Atraso de 300ms antes da animação
  distance: '50px',  // Distância do movimento (em pixels)
  origin: 'bottom',  // O elemento aparece vindo de baixo
  duration: 1000,    // Tempo da animação (em milissegundos)
  easing: 'ease-in-out', // Efeito de transição
});

ScrollReveal().reveal('.container3', {
  delay: 300,        // Atraso de 300ms antes da animação
  distance: '50px',  // Distância do movimento (em pixels)
  origin: 'bottom',  // O elemento aparece vindo de baixo
  duration: 1000,    // Tempo da animação (em milissegundos)
  easing: 'ease-in-out', // Efeito de transição
});

function handleTickInit(tick) {
  // Define a data de contagem regressiva
  var countdownDate = "2025-07-05T17:30:00";

  // Criar o contador regressivo
  var counter = Tick.count.down(countdownDate);

  counter.onupdate = function (value) {
      tick.value = value;
  };

  counter.onended = function () {
      // Mensagem ao final da contagem regressiva
      document.querySelector('.tick-onended-message').style.display = '';
  };
}

// Seleção dos elementos corretos
let btnMenu = document.querySelector('.btn-menu');  // Botão de abrir menu
let menu = document.querySelector('.menu-mobile');  // Menu
let btnFechar = document.querySelector('.btn-fechar');  // Botão de fechar menu

// Abre o menu ao clicar no botão de abrir
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');  // Adiciona a classe para abrir o menu
});

// Fecha o menu ao clicar no botão de fechar
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');  // Remove a classe para fechar o menu
});























