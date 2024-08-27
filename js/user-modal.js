import {isEscapeKey, isEnterKey} from './util.js';
import { renderSimilarList, clearSimilarList } from './similar-list.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

const onPopupEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  renderSimilarList();

  document.addEventListener('keydown', onPopupEscKeyDown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  clearSimilarList();

  document.removeEventListener('keydown', onPopupEscKeyDown);
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});