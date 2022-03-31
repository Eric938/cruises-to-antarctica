import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addSubmitEventListenerOnForm, addDataToInputs} from './modules/modals/add-submit-event-listener-on-form';
import {removeClassNoJsFromHeader} from './modules/modals/remove-class-no-js-from-header';
import {addEventOnCards, addEventClickForCloseCardOnDocument} from './modules/modals/add-events-on-cards';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  removeClassNoJsFromHeader();
  initModals();
  addEventOnCards();
  addEventClickForCloseCardOnDocument();

  window.addEventListener('load', () => {
    addSubmitEventListenerOnForm();
    addDataToInputs();
  });
});
