import { renderCarDetails } from '../render-utils.js';
import { getCar } from '../fetch-utils.js';

const carDetailContainer = document.querySelector('#car-details');
const homeButton = document.querySelector('#home');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const car = await getCar(id);

    const carEl = renderCarDetails(car);
    carDetailContainer.append(carEl);
});

homeButton.addEventListener('click', () => {
    location.replace('../');
});