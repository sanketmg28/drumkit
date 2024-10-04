window.addEventListener('keydown', playSound);

function playSound(eve) {
  const audio = document.querySelector(`audio[data-key="${eve.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${eve.keyCode}"]`);
  
  if (!audio) return; // Stop the function if there’s no associated audio.
  
  audio.currentTime = 0; // Rewind the sound to the start
  audio.play();
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(eve) {
  if (eve.propertyName !== 'transform') return; // Skip if it's not a transform
  this.classList.remove('playing');
}
