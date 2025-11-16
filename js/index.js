const title = document.querySelector('.title')
const text = `HELLO BABY!`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

const title1 = document.querySelector('#title1')
const text1 = `HELLO BABY!`.split('')

// Create container for better responsive layout
title1.style.display = 'flex'
title1.style.flexWrap = 'wrap'
title1.style.justifyContent = 'center'
title1.style.gap = '0.5rem'

for (let index = 0; index < text1.length; index++) {
  if (text1[index] !== ' ') {
    title1.innerHTML += `<span>${text1[index]}</span>`
  } else {
    title1.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements1 = document.querySelectorAll('#title1 span');
textElements1.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});