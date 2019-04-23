function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var Samsung = new Phone("Samsung", 1999, "black");
var Nokia = new Phone("Nokia", 1499, "red");


iPhone6S.printInfo();
Samsung.printInfo();
Nokia.printInfo();