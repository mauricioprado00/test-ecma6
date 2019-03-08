
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