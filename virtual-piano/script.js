const piano = document.querySelector(".piano");

piano.addEventListener("click", (event) => {
  if (event.target.classList.contains("piano-key")) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
  }
});

window.addEventListener("keydown", (event) => {
    if (!event.repeat){
        const key = document.querySelector(`#${event.code}`);
        key.classList.add('active');
    }
})

window.addEventListener("keyup", (event) => {
        const key = document.querySelector(`#${event.code}`);
        key.classList.remove('active');  
})

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

  const keyNoteMap = {
      'KeyD':'c',
      'KeyF':'d',
      'KeyG':'e',
      'KeyH':'f',
      'KeyJ':'g',
      'KeyK':'a',
      'KeyL':'b',
      'KeyR':'c♯',
      'KeyT':'d♯',
      'KeyU':'f♯',
      'KeyI':'g♯',
      'KeyO':'a♯'
  };
 
  window.addEventListener('keydown', (event) => {
    const note = keyNoteMap[event.code]; 
    if(note) {
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
  });

  function buttonClick(className){
      let add,remove;
      if(className === 'btn-notes'){
          switchPianoKey('notes', 'letters');
          add = '.btn-notes';
          remove = '.btn-letters';
      }
      else{
          switchPianoKey('letters' , 'notes');
          add = '.btn-letters';
          remove = '.btn-notes'
      }
      const buttonAdd = document.querySelector(add);
      buttonAdd.classList.add('btn-active');
      const buttonRemove = document.querySelector(remove);
      buttonRemove.classList.remove('btn-active');
  }

  function switchPianoKey(add,remove){
      const pianoKeys = document.querySelectorAll('.piano-key');
      for(let i = 0; i < pianoKeys.length; i++){
          pianoKeys[i].classList.add(add);
          pianoKeys[i].classList.remove(remove);
      }
  }
  const buttonNote = document.querySelector('.btn-notes');
  const buttonLetters = document.querySelector('.btn-letters');
  buttonNote.addEventListener('click',() => buttonClick('btn-notes'));
  buttonLetters.addEventListener('click',() => buttonClick('btn-letters'));

  
