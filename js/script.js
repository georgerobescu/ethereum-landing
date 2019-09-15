// Typewriter

function typeWriter() {
  const words = [
    'applications.',
    'finance.',
    'organizations.'
  ];
  const element = document.querySelector('.typewriter');
  let removing = false;
  let i = 0; // Word
  let j = 0; // Character

  setInterval(() => {
    if(j < words[i].length) element.innerHTML += words[i][j];
    if(j == words[i].length + 15) removing = true;
    if(removing) element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length -1);
    j++
    if(element.innerHTML.length === 0) {
      if(i === words.length - 1) i = 0;
      else i++;

      j = 0;
      removing = false;
    }
  }, 75);
}

typeWriter();


// Dark mode

const darkButton = document.querySelector('#dark-mode');
const body = document.querySelector('body');
const backgroundVideo = document.querySelector('.background__video');
const moonSun = document.querySelector('#moon-sun');

darkButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')) {
    backgroundVideo.src = 'https://res.cloudinary.com/dtqk9d1xc/video/upload/v1565083119/Comp_1_3_yikcia.mp4';
    moonSun.src = 'img/sun.png';
  } else {
    backgroundVideo.src = 'https://ucarecdn.com/b33f5c86-2d0b-4063-99e1-0acfc6d15a00/ethwhiteoptimized2.mp4';
    moonSun.src = 'img/moon.png';
  }
});