const isAdult = (age) => age >= 18 ? 'Adult!' : 'Not Adult!';

const canDrink = (age) => age >= 18 ? 'Can Drink!' : "Can't Drink!";

const isSenior = (age) => age >= 65 ? 'is older' : 'young one!';

export {isAdult,canDrink, isSenior as default};