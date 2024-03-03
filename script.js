'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/* ========== 233. Using the Geolocation API ========== */

if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(position)
    {
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        console.log(`https://www.google.nl/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        const   map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot//{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coords)
            .addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
    }, function()
    {
        alert('Could not retrieve your position');
    })
}

/* ========== 234. Displaying a map using the leaflet library ========== */

// added to 233.