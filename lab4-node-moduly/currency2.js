class Currency {
    constructor(rates) {
        this.rates = rates;
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    toPLN(amount, currencyCode) {
        const rate = this.rates[currencyCode];
        if (!rate) throw new Error("Nieznany kod waluty");
        return this.roundTwoDecimals(amount * rate);
    }
}

module.exports = Currency;