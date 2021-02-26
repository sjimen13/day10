const chekbox = document.querySelectorAll('input');
console.log(chekbox);

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked && lastChecked) {
    chekbox.forEach((chekbox) => {
      if (chekbox === this || chekbox === lastChecked) {
        inBetween = !inBetween;
        console.log('start to check between');
      }
      if (inBetween) {
        chekbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

chekbox.forEach((item) => {
  item.addEventListener('click', handleCheck);
});
