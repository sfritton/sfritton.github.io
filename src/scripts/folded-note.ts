import html2canvas from 'html2canvas';

const paper = document.querySelector<HTMLDivElement>('.paper');

const button = paper?.querySelector('.paper-back');

let transitionCount = 0;

button?.addEventListener('click', () => {
  const screenshotTarget = paper?.querySelector<HTMLDivElement>('.paper-content');

  screenshotTarget &&
    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL('image/png');

      paper?.style.setProperty('--background-image', `url("${base64image}")`);
    });
  paper?.classList.add('open');
});

paper?.addEventListener('transitionend', (a) => {
  transitionCount++;
  if (transitionCount >= 16) {
    paper.style.setProperty('--background-image', 'none');
  }
});

export const paperCleanup = () => {
  paper?.classList.remove('open');
};
