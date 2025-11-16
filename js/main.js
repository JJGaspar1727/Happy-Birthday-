
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BIRTHDAY BABY!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    const titles1 = ('I LOVE YOU SO MUCH!').split('')
    const titleElement1 = document.getElementById('title1');
    let index1 = 0;

    function appendTitle1() {
      if (index1 < titles1.length) {
        titleElement1.innerHTML += titles1[index1];
        index1++;
        setTimeout(appendTitle1, 300); // 1000ms delay
      }
    }

    appendTitle1();

    clearTimeout(c);
  }, 1000);
};