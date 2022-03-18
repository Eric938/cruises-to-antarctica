const header = document.querySelector('[data-header]');

const removeClassNoJs = (target) => {
  if (target.classList.contains('no-js')) {
    target.classList.remove('no-js');
  }
};

const removeClassNoJsFromHeader = () => {
  removeClassNoJs(header);
};

export {removeClassNoJsFromHeader};
