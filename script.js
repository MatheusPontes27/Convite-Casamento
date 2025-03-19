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

const targetDate = new Date(2025, 6, 5, 17, 30, 0); // 5 de julho de 2025 às 17:30
targetDate.setHours(targetDate.getHours() + 5);

function getTimeSegmentElements(segmentElement) {
  const segmentDisplay = segmentElement.querySelector('.segment-display');
  const segmentDisplayTop = segmentDisplay.querySelector('.segment-display__top');
  const segmentDisplayBottom = segmentDisplay.querySelector('.segment-display__bottom');

  const segmentOverlay = segmentDisplay.querySelector('.segment-overlay');
  const segmentOverlayTop = segmentOverlay.querySelector('.segment-overlay__top');
  const segmentOverlayBottom = segmentOverlay.querySelector('.segment-overlay__bottom');

  return {
    segmentDisplayTop,
    segmentDisplayBottom,
    segmentOverlay,
    segmentOverlayTop,
    segmentOverlayBottom,
  };
}

function updateSegmentValues(displayElement, overlayElement, value) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
  const segmentElements = getTimeSegmentElements(segmentElement);

  if (parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue) {
    return;
  }

  segmentElements.segmentOverlay.classList.add('flip');

  updateSegmentValues(segmentElements.segmentDisplayTop, segmentElements.segmentOverlayBottom, timeValue);

  function finishAnimation() {
    segmentElements.segmentOverlay.classList.remove('flip');
    updateSegmentValues(segmentElements.segmentDisplayBottom, segmentElements.segmentOverlayTop, timeValue);
    this.removeEventListener('animationend', finishAnimation);
  }

  segmentElements.segmentOverlay.addEventListener('animationend', finishAnimation);
}

function updateTimeSection(sectionID, timeValue) {
  const firstNumber = Math.floor(timeValue / 10) || 0;
  const secondNumber = timeValue % 10 || 0;
  const sectionElement = document.getElementById(sectionID);
  const timeSegments = sectionElement.querySelectorAll('.time-segment');

  updateTimeSegment(timeSegments[0], firstNumber);
  updateTimeSegment(timeSegments[1], secondNumber);
}

function getTimeRemaining(targetDateTime) {
  const nowTime = Date.now();
  const complete = nowTime >= targetDateTime;

  if (complete) {
    return {
      complete,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor((targetDateTime - nowTime) / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  return {
    complete,
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateAllSegments() {
  const timeRemainingBits = getTimeRemaining(targetDate.getTime());

  updateTimeSection('days', timeRemainingBits.days);
  updateTimeSection('hours', timeRemainingBits.hours);
  updateTimeSection('minutes', timeRemainingBits.minutes);
  updateTimeSection('seconds', timeRemainingBits.seconds);

  return timeRemainingBits.complete;
}

const countdownTimer = setInterval(() => {
  const isComplete = updateAllSegments();
  if (isComplete) {
    clearInterval(countdownTimer);
  }
}, 1000);

updateAllSegments();






