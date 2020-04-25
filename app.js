const pounds = document.querySelector('.pounds')
const kilograms = document.querySelector('.kilograms')
const ounces = document.querySelector('.ounces')

pounds.addEventListener('input', function() {
    kilograms.value = pounds.value * 0.453592;
    ounces.value = pounds.value * 16;
})

kilograms.addEventListener('input', function() {
    pounds.value = kilograms.value * 2.205;
    ounces.value = kilograms.value * 35.274;
})

ounces.addEventListener('input', function() {
    pounds.value = ounces.value / 16;
    kilograms.value = ounces.value / 35.274;
})

const meters = document.querySelector('.meters')
const feet = document.querySelector('.feet')
const miles = document.querySelector('.miles')

meters.addEventListener('input', function() {
    feet.value = meters.value * 3.28;
    miles.value = meters.value * 0.000621371;
})

feet.addEventListener('input', function() {
    meters.value = feet.value / 3.281;
    miles.value = feet.value / 5280;

})

miles.addEventListener('input', function() {
    feet.value = miles.value * 5280;
    meters.value = miles.value * 1609;
})


const cups = document.querySelector('.cups')
const ouncesLiquid = document.querySelector('.ounces-liquid')
const litres = document.querySelector('.litres')

cups.addEventListener('input', function() {
    ouncesLiquid.value = cups.value * 8;
    litres.value = cups.value / 4.17;
})

ouncesLiquid.addEventListener('input', function() {
    cups.value = ouncesLiquid.value / 8;
    litres.value = ouncesLiquid.value / 33.814;
})

litres.addEventListener('input', function() {
    cups.value = litres.value * 4.16667;
    ouncesLiquid.value = litres.value * 33.814;
})