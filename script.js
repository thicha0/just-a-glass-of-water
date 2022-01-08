let shaking = false;
let count = 0;

let content = document.getElementById('content');
let glass = document.getElementById('glass');
let trex = document.getElementById('trex');

let footstep = document.getElementById('footstep');
let roar = document.getElementById('roar');

glass.addEventListener('click', function() {
  if (!shaking) {
    glass.classList.remove('pointer');
    shaking = true;
    if (++count === 3) {
      roar.play();
      trex.classList.remove('slide-out');
      trex.classList.add('slide-in');
      count = 0;
      setTimeout(() => {
        trex.classList.remove('slide-in');
        trex.classList.add('slide-out');
      }, 3000);
    } else {
      footstep.play();
      content.classList.add('shake');
    }
    setTimeout(() => {
      content.classList.remove('shake');
      glass.classList.add('pointer');
      shaking = false;
    }, 2000);
  }

}, false);