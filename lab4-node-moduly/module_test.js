const currency1 = require('./currency1');

console.log("currency1.js: ");
console.log("60 USD =", currency1.toPLN(60, "USD"), "PLN");
console.log("35 EUR =", currency1.toPLN(35, "EUR"), "PLN");

const Currency = require('./currency2');

const currency2 = new Currency({
    USD: 3.64,
    EUR: 4.22,
    GBP: 4.78,
    CHF: 4.58,
    JPY: 0.024
});

console.log("\ncurrency2.js: ");
console.log("120 GBP =", currency2.toPLN(120, "GBP"), "PLN");
console.log("2500 JPY =", currency2.toPLN(2500, "JPY"), "PLN");