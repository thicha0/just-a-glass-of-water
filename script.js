// Varibles
let shaking = false;
let count = 0;

// Elemets
let content = document.getElementById('content');
let text = document.getElementById('text');
let glass = document.getElementById('glass');
let trex = document.getElementById('trex');

// Audio
let footstep = document.getElementById('footstep');
let roar = document.getElementById('roar');


// Events

glass.addEventListener('mouseenter', function() {
  if (count === 0) {
    text.innerHTML = 'Oh, a glass of water...';
    text.style.opacity = '1';
    setTimeout(() => {
      glass.classList.add('pointer');
    }, 1000);
  }
});

glass.addEventListener('click', function() {
  if (!shaking) {
    count++;
    glass.classList.remove('pointer');
    text.style.opacity = '0';

    if (count === 3) {
      glass.style.opacity = '0';
      roar.play();
      trex.classList.remove('slide-out');
      trex.classList.add('slide-in');
      setTimeout(() => {
        trex.classList.remove('slide-in');
        trex.classList.add('slide-out');
        count = 0;
        glass.style.opacity = '1';
        text.innerHTML = 'Oh, a glass of water...';
      }, 3000);
    } else {
      shaking = true;
      let newText = ''
      if (count === 1) {
        newText = 'What was that ?';
      }

      if (count === 2) {
        newText = '...';
      }
      footstep.play();
      content.classList.add('shake');
      setTimeout(() => {
        content.classList.remove('shake');
        glass.classList.add('pointer');
        shaking = false;
        text.innerHTML = newText;
        text.style.opacity = '1';
      }, 2000);
    }
  }
}, false);
