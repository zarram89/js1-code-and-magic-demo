import './setup.js';
import {closeUserModal} from './user-modal.js';
import {setUserFormSubmit, setEyesClick, setCoatClick} from './user-form.js';
import {renderSimilarList} from './similar-list.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

const SIMILAR_WIZARD_COUNT = 4;

getData()
  .then((wizards) => {
    renderSimilarList(wizards.slice(0, SIMILAR_WIZARD_COUNT));
    setEyesClick(() => renderSimilarList(wizards));
    setCoatClick(() => renderSimilarList(wizards));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUserModal);
