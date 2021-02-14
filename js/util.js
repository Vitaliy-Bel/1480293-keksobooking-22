import {createWizard} from './data.js';

const SIMILAR_WIZARD_COUNT = 10;
const similarWizards = new Array(SIMILAR_WIZARD_COUNT).fill(null).map(() => createWizard());

console.log(similarWizards);
