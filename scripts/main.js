'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Copyright year
  document.getElementById('copyright-year').textContent = (new Date()).getFullYear();

// Random background
  const nbBackgrounds = 2;
  const bodyClass = `background-${Math.floor(Math.random() * nbBackgrounds)}`;
  document.getElementsByTagName('body')[0].classList.add(bodyClass);
});