
class Burger {
	constructor(name, mainIngredient, secondaryIngredient, ...otherIngredients) {
		this.name = name;
		this.mainIngredient = mainIngredient;
		this.secondaryIngredient = secondaryIngredient;
		this.otherIngredients = otherIngredients;
	}
}
class TestGenerator {

	* burgerCook() {
		yield new Burger("Cheese burger", 'cheese', 'meat', 'buns', 'letuce');
		yield new Burger("Vegan burger", 'linsen', 'tomate', 'buns', 'letuce');
		yield new Burger("Goat burger", 'goat meat', 'tomate', 'buns', 'letuce');
	}
}

new TestGenerator();

var burgerCook = (new TestGenerator()).burgerCook();

for (var burger of burgerCook) {
	console.log(burger);
}

let allBurgers = Array.from((new TestGenerator()).burgerCook());

let [firstBurger, secondBurger, ...otherBurgers] = Array.from((new TestGenerator()).burgerCook());

console.log({allBurgers: allBurgers});
console.log({firstBurger: firstBurger});
console.log({secondBurger: secondBurger});
console.log({otherBurgers: otherBurgers});

// Well known symbols, Symbol.iterator
var iteratable = {};

iteratable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
};


console.log([...iteratable]);
console.log([...TestGenerator.prototype.burgerCook()]);

// test destructuring
let returnArray = function () {
	return [
		{'prop1': 'val1', 'prop2': 'val2'}, 
		'ret1', 'ret2'
	];
}


let [{prop1: propa, prop2: propb}, ret3, ret4] = returnArray();

console.log({
	propa: propa,
	propb: propb,
	ret3, ret4
});

