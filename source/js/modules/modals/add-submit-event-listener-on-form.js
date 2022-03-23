const form = document.querySelector('[data-form]');
const name = document.querySelector('[data-name]');
const phone = document.querySelector('[data-phone]');
const mail = document.querySelector('[data-mail]');

let isStorageSupport = true;
let nameData = '';
let namePhone = localStorage.getItem('phone');
let nameMail = localStorage.getItem('mail');

if (name) {
  try {
    nameData = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }
}

const addDataToLocalStorage = (evt) => {
  if (!name.value || !phone.value || !mail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('mail', mail.value);
    }
  }

};

const addSubmitEventListenerOnForm = () => {
  if (form) {
    form.addEventListener('submit', addDataToLocalStorage);
  }
};

const addDataToInput = (input, data) => {
  if (input) {
    if (data) {
      input.value = data;
    }
  }
};

const addDataToInputs = () => {
  addDataToInput(name, nameData);
  addDataToInput(phone, namePhone);
  addDataToInput(mail, nameMail);
};

export {addSubmitEventListenerOnForm, addDataToInputs};
