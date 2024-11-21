import { createWizards } from './data.js';

const similarElement = document.querySelector('.setup-similar');
similarElement.classList.remove('hidden');

const similarListElement = similarElement.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const similarWizards = createWizards();

const renderSimilarList = () => {
  const similarListFragment = document.createDocumentFragment();

  similarWizards.forEach(({name, coatColor, eyesColor}) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = name;
    wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;

    similarListFragment.appendChild(wizardElement);
  });

  similarListElement.appendChild(similarListFragment);
};

const clearSimilarList = () => {
  similarListElement.innerHTML = '';
};

export {
  renderSimilarList,
  clearSimilarList,
};

// const SIMILAR_WIZARD_COUNT = 4;
// const Default = {
//   COAT_COLOR: 'rgb(101, 137, 164)',
//   EYES_COLOR: 'black',
// };

// const similarElement = document.querySelector('.setup-similar');
// const similarListElement = similarElement.querySelector('.setup-similar-list');
// const similarWizardTemplate = document.querySelector('#similar-wizard-template')
//   .content
//   .querySelector('.setup-similar-item');

// const getWizardRank = (wizard) => {
//   const coatColorInput = document.querySelector('[name="coat-color"]');
//   const eyesColorInput = document.querySelector('[name="eyes-color"]');

//   let rank = 0;

//   if (wizard.colorCoat === (coatColorInput.value || Default.COAT_COLOR)) {
//     rank += 2;
//   }
//   if (wizard.colorEyes === (eyesColorInput.value || Default.EYES_COLOR)) {
//     rank += 1;
//   }

//   return rank;
// };

// const compareWizards = (wizardA, wizardB) => {
//   const rankA = getWizardRank(wizardA);
//   const rankB = getWizardRank(wizardB);

//   return rankB - rankA;
// };

// const renderSimilarList = (similarWizards) => {
//   const similarListFragment = document.createDocumentFragment();

//   similarWizards
//     .slice()
//     .sort(compareWizards)
//     .slice(0, SIMILAR_WIZARD_COUNT)
//     .forEach(({name, colorCoat, colorEyes}) => {
//       const wizardElement = similarWizardTemplate.cloneNode(true);
//       wizardElement.querySelector('.setup-similar-label').textContent = name;
//       wizardElement.querySelector('.wizard-coat').style.fill = colorCoat;
//       wizardElement.querySelector('.wizard-eyes').style.fill = colorEyes;
//       similarListFragment.appendChild(wizardElement);
//     });

//   similarListElement.innerHTML = '';
//   similarListElement.appendChild(similarListFragment);
//   similarElement.classList.remove('hidden');
// };

// export {renderSimilarList};
