import {Modals} from './modals';

let modals;


const settings = {
  'default': {
    preventDefault: true,
    eventTimeout: 400,
  },
};

const initModals = () => {
  modals = new Modals(settings);
  window.modals = modals;
};

export {modals, initModals};
