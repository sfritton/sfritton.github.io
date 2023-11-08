const slotMachine = document.querySelector('.slot-machine');
const digits = Array.from(document.querySelectorAll('.digit > span'));

const randomizeDigits = () => {
  digits.forEach((digit) => {
    digit.textContent = String(Math.floor(Math.random() * 10));
  });
};

document.querySelector('.lever')?.addEventListener('click', () => {
  randomizeDigits();

  slotMachine?.classList.remove('animating');
  setTimeout(() => slotMachine?.classList.add('animating'), 0);
});

randomizeDigits();
