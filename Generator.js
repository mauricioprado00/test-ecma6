
class TestGenerator {

	* burgerCook() {
		yield "Cheese burger";
		yield "Vegan burger";
		yield "Goat burger";
	}
}

new TestGenerator();

var burgerCook = (new TestGenerator()).burgerCook();

for (var burger of burgerCook) {
	console.log(burger);
}