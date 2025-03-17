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

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("background-music");

  // Recupera o tempo salvo
  let savedTime = localStorage.getItem("musicTime");

  // Se houver, posiciona o áudio na posição salva
  if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
  }

  // Salva o tempo de reprodução atual ao sair da página
  window.addEventListener("beforeunload", function () {
      localStorage.setItem("musicTime", audio.currentTime);
  });

  // Tenta iniciar o áudio automaticamente
  audio.play().catch(function (error) {
      console.log("Erro ao tentar reproduzir o áudio: ", error);
  });
});

var promise = document.querySelector('video').play();

if (promise !== undefined) {
  promise.then(_ => {
    // A reprodução foi iniciada com sucesso
  }).catch(error => {
    // A reprodução foi bloqueada
    // Exiba um botão de "Play"
    console.log("Erro ao tentar reproduzir o áudio:", error);
  });
}




