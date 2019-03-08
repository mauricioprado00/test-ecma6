
class TestGenerator {

	* burgerCook() {
		yield "Cheese burger";
		yield "Vegan burger";
		yield "Goat burger";
	}
}

new TestGenerator();

var burgerCook = (new TestGenerator()).burgerCook();

console.log(burgerCook.next());
console.log(burgerCook.next());
console.log(burgerCook.next());
console.log(burgerCook.next());
