(() => {
  const modal = document.querySelector('.js-modal-container');
  const openModalBtn = document.querySelector('.js-open-modal');
  const closeModalBtn = document.querySelector('.js-close-modal');

  const toggleMenu = () => {
    const isMenuOpen =
      openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    modal.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openModalBtn.addEventListener('click', toggleMenu);
  closeModalBtn.addEventListener('click', toggleMenu);

  
})();