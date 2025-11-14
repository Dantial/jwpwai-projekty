const readline = require("readline");
const math1 = require("./myMathModule1");
const MyMathModule = require("./myMathModule2");

const math2 = new MyMathModule(2); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Podaj pierwszą liczbę: ", a => {
    rl.question("Podaj drugą liczbę: ", b => {
        a = Number(a);
        b = Number(b);

        console.log("\nModuł 1 (exports): ");
        console.log("Dodawanie:", math1.add(a, b));
        console.log("Odejmowanie:", math1.subtract(a, b));
        console.log("Mnożenie:", math1.multiply(a, b));
        console.log("Dzielenie:", math1.divide(a, b));
        console.log("Potęgowanie:", math1.power(a, b));

        console.log("\nModuł 2 (klasa), factor=2: ");
        console.log("Dodawanie:", math2.add(a, b));
        console.log("Odejmowanie:", math2.subtract(a, b));
        console.log("Mnożenie:", math2.multiply(a, b));
        console.log("Dzielenie:", math2.divide(a, b));
        console.log("Pierwiastek z pierwszej liczby:", math2.sqrt(a));

        rl.close();
    });
});

rl.on("close", () => {
    console.log("\nZakończono obliczenia.");
    process.exit(0);
});