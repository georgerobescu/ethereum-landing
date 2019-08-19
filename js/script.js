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