class MyMathModule {
    constructor(factor = 1) {
        this.factor = factor;
    }

    add(a, b) {
        return (a + b) * this.factor;
    }

    subtract(a, b) {
        return (a - b) * this.factor;
    }

    multiply(a, b) {
        return (a * b) * this.factor;
    }

    divide(a, b) {
        if (b === 0) return "Błąd: dzielenie przez zero";
        return (a / b) * this.factor;
    }

    sqrt(a) {
        return Math.sqrt(a) * this.factor;
    }
}

module.exports = MyMathModule;