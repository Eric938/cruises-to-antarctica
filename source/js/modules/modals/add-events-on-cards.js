const cruises = document.querySelectorAll('[data-cruise]');
const breakpointDesktop = window.matchMedia('(min-width:1024px)');

const addClassIsTouched = (target) => {
  if (!target.classList.contains('is-touched')) {
    target.classList.add('is-touched');
  }
};

const removeClassIsTouched = (target) => {
  if (target.classList.contains('is-touched')) {
    target.classList.remove('is-touched');
  }
};

const closeCards = () => {
  if (cruises.length) {
    cruises.forEach((cruise) => {
      removeClassIsTouched(cruise);
    });
  }
};

const addEventClickForCloseCardOnDocument = () => {
  if (cruises.length) {
    document.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.closest('[data-cruise]')) {
        closeCards();
      }
    });
  }
};

const addEventClickOnCards = () => {
  cruises.forEach((cruise) => {
    cruise.addEventListener('click', () => {
      closeCards();
      addClassIsTouched(cruise);
    });
  });
};

const addEventFocusOnCards = () => {
  cruises.forEach((cruise) => {
    cruise.addEventListener('focus', () => {
      closeCards();
      addClassIsTouched(cruise);
    });
  });
};

const addEventOnCards = () => {
  if (cruises.length) {
    if (breakpointDesktop.matches) {
      addEventFocusOnCards();
    } else {
      addEventClickOnCards();
    }
  }
};

export {addEventOnCards, addEventClickForCloseCardOnDocument};
