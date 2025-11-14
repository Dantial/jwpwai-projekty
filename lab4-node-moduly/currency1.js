function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

const rates = {
    USD: 3.64,
    EUR: 4.22,
    GBP: 4.78,
    CHF: 4.58,
    JPY: 0.024
};

exports.toPLN = function (amount, currencyCode) {
    const rate = rates[currencyCode];
    if (!rate) throw new Error("Nieznany kod waluty");

    return roundTwoDecimals(amount * rate);
};