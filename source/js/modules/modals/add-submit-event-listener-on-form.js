const form = document.querySelector('[data-form]');
const name = form.querySelector('[data-name]');
const phone = form.querySelector('[data-phone]');
const mail = form.querySelector('[data-mail]');

let isStorageSupport = true;
let nameData = '';
let namePhone = localStorage.getItem('phone');
let nameMail = localStorage.getItem('mail');

try {
  nameData = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
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
  form.addEventListener('submit', addDataToLocalStorage);
};

const addDataToInputs = () => {
  if (name) {
    if (nameData) {
      name.value = nameData;
    }
  }
  if (phone) {
    if (namePhone) {
      phone.value = namePhone;
    }
  }
  if (mail) {
    if (nameMail) {
      mail.value = nameMail;
    }
  }
};

export {addSubmitEventListenerOnForm, addDataToInputs};
