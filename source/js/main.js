import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addSubmitEventListenerOnForm, addDataToInputs} from './modules/modals/add-submit-event-listener-on-form';
import {removeClassNoJsFromHeader} from './modules/modals/remove-class-no-js-from-header';


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  removeClassNoJsFromHeader();
  initModals();

  window.addEventListener('load', () => {
    addSubmitEventListenerOnForm();
    addDataToInputs();
  });
});
