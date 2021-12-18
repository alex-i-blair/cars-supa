export async function renderCarCard(car) {
    const carCard = document.createElement('div');
    const carName = document.createElement('div');
    const carMake = document.createElement('h3');
    const carModel = document.createElement('h3');
    const carYear = document.createElement('h3');
    const carImg = document.createElement('img');

    carImg.src = `./assets/${car.make}.jpeg`;
    carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;




    carCard.classList.add('car-card');
    carName.append(carYear, carMake, carModel);
    carCard.append(carName, carImg);




}