const specialCharacters: Record<string, string> = {
  Backquote: '`',
  Minus: '-',
  Equal: '=',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Semicolon: ';',
  Quote: "'",
  Comma: ',',
  Period: '.',
  Slash: '/',
  Space: 'space',
};

const getKeyLabel = (code: string) => {
  // letters
  if (/^Key/.test(code)) return code.replace('Key', '');

  // numbers
  if (/^Digit/.test(code)) return code.replace('Digit', '');

  // special characters
  if (specialCharacters[code]) return specialCharacters[code];

  return code;
};

const buttons = document.querySelectorAll<HTMLButtonElement>('.keyboard button');

const findButton = (code: string) => {
  const keyLabel = getKeyLabel(code);

  for (let button of buttons) {
    if (button.innerText.toLowerCase().replace(/\s/, '') === keyLabel.toLowerCase()) return button;
  }
};

document.addEventListener('keydown', (e) => findButton(e.code)?.classList.add('pressed'));
document.addEventListener('keyup', (e) => {
  findButton(e.code)?.classList.remove('pressed');
  // TODO: remove
  console.log(document.activeElement);
});

document.querySelector('.skip-keyboard')?.addEventListener('click', (e) => {
  e.preventDefault();
  const parallaxTitle = document.querySelector<HTMLDivElement>('.parallax-title');

  parallaxTitle?.focus();
});
