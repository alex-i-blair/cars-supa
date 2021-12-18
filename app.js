// import functions and grab DOM elements
import {
    getCars
} from './fetch-utils.js';

import {
    renderCarCard
} from './render-utils.js';
// let state
const carsContainerEl = document.querySelector('#cars-container');

window.addEventListener('load', async(event)=> {
    event.preventDefault();
    const cars = await getCars();
    for (let car of cars) {
        const carCard = renderCarCard(car);
        carsContainerEl.append(carCard);

    }
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
