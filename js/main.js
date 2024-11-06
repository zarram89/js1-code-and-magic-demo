import './setup.js';
import { closeUserModal } from './user-modal.js';
import { setUserFormSubmit } from './user-form.js';
import { renderSimilarList } from './similar-list.js';

const SIMILAR_WIZARD_COUNT = 4;

fetch('https://32.javascript.htmlacademy.pro/code-and-magick/data')
  .then((response) => response.json())
  .then((wizards) => renderSimilarList(wizards.slice(0, SIMILAR_WIZARD_COUNT)));

setUserFormSubmit(closeUserModal);
