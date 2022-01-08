export function renderCarCard(car) {
    const carCard = document.createElement('div');
    const carName = document.createElement('div');
    const carMake = document.createElement('h3');
    const carModel = document.createElement('h3');
    const carYear = document.createElement('h3');
    const carImg = document.createElement('img');

    carImg.src = `./assets/${car.image_id}.jpeg`;
    carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;

    carName.classList.add('car-name');
    carCard.classList.add('car-card');
    carName.append(carYear, carMake, carModel);
    carCard.append(carName, carImg);
    return carCard;
}

export function renderCarDetails(car) {
    const carEl = document.createElement('div');
    const carImg = document.createElement('img');
    const nameEl = document.createElement('h1');
    const detailsEl = document.createElement('p');

    nameEl.textContent = `${car.year} ${car.make} ${car.model}`;
    carImg.src = `../assets/${car.image_id}-2.jpeg`;
    detailsEl.textContent = car.details;
    carEl.append(nameEl, carImg, detailsEl);
    carEl.classList.add('car-details');
    return carEl;
} 