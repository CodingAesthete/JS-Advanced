function numbersCheck(fruit, grams, pricePerKg) {
    let kg=grams/1000;
    let price=pricePerKg*kg;
    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}