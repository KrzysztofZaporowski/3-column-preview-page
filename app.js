const SEDAN_BUTTON = document.getElementById('sedan-button');
const SUV_BUTTON = document.getElementById('suv-button');
const LUXURY_BUTTON = document.getElementById('luxury-button');

SEDAN_BUTTON.addEventListener('click', () => {
    alert('You will leave this page and go to the sedan page!');
    window.location.href = 'https://pl.wikipedia.org/wiki/Sedan_(nadwozie)';
});
SUV_BUTTON.addEventListener('click', () => {
    alert('You will leave this page and go to the SUV page!');
    window.location.href = 'https://pl.wikipedia.org/wiki/SUV';
});
LUXURY_BUTTON.addEventListener('click', () => {
    alert('You you will leave this page and go to the luxury page!');
    window.location.href = 'https://en.wikipedia.org/wiki/Luxury_car';
});