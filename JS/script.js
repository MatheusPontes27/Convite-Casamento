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

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".navList").classList.toggle("active");
});






















