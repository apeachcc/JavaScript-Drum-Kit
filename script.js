function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform property
    this.classList.remove('playing');
  }

  function playSound(e) {
    //* e = keyboard event // keyCode = data-key
    //not using querySelectorAll>>only wanna select one
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//select the div class of key

    if (!audio) return; //stop the function from running all tgt
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');

  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);