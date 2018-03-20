class Person {
	constructor(name, age, gender){
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	greet(otherPersonName){
		console.log("Hello " + otherPersonName);
	}
	walk(){
		console.log("I am walking.");
	}
};

class Pet {
	constructor(name, age, species, gender){
		this.name = name;
		this.age = age;
		this.breed = species;
		this.gender = gender;
	}
	feed(){
		console.log(this.name + " is now eating.");
	}
};

class Boat {
	constructor(name, model, color, size, topSpeed){
		this.name = name;
		this.model = model;
		this.color = color;
		this.size = size;
		this.topSpeed = topSpeed;
	}
	start(){
		console.log(this.name + " is now running.");
	}
};

class Artist extends Person {
	constructor(name, age, gender, medium) {
		super(name, age, gender);
		this.medium = medium;
	}
	makeArt(){
		console.log(this.name + " is now creating a piece using " + this.medium);
	}
};

class Robot extends Person {
	constructor(name, age, gender, purpose){
		super(name, age, gender);
		this.gender = null;
		this.purpose = purpose;
	}
	performFunction (job) {
		console.log(this.name + " will do " + this.job + " for you.");
	}
};

class Computer {
	constructor(model, yearMade, OS){
		this.model = model;
		this.yearMade = yearMade;
		this.OS = OS;
		this.isPoweredOn = false;
	}
	power(){
		// will invert the boolean value
		this.isPoweredOn = !this.isPoweredOn;
	}
}

const computer1 = new Computer ("Macbook Pro", 2017, "High Sierra");
console.log(computer1.isPoweredOn);
computer1.power();
console.log(computer1.isPoweredOn);

class Dog extends Pet {
	constructor(name, age, species, gender, breed){
		super(name, age, species, gender);
		this.species = "dog";
		this.breed = breed;
	}
	bark(){
		console.log(this.name + " says woof!");
	}
	sit(){
		console.log(this.name + " is now sitting.");
	}
};

class Painter extends Person {
	constructor(name, age, gender){
		super(name, age, gender);
	}
	paint(color){
		console.log(this.name + " is painting a canvas " + color);
	}
}

class Car {
	constructor(model, color, topSpeed){
		this.model = model;
		this.color = color;
		this.topSpeed = topSpeed;
	}
	start (){
		console.log("Your " + this.model + " is now running.");
	}
};

class Laptop extends Computer {
	constructor(model, yearMade, OS){
		super(model, yearMade, OS)
	}
	charge(){
		console.log("Your" + this.model + " is now charging.");
	}
}

class Humvee extends Car {
	constructor(model, color, topSpeed, weaponType){
		super(model, color, topSpeed);
		this.weaponType = weaponType;
	}
	fire(target){
		console.log("The Humvee has fired its " + this.weaponType + " at " + targets);
	}
};

class Smartphone extends Computer {
	constructor(model, yearMade, OS, size){
		super(model, yearMade, OS);
		this.size = size;
	}
	charge(){
		console.log("Your " + this.model + "is now charging.");
	}
	call(person){
		console.log("Calling " + person);
	}
};

class Baby extends Person {
	constructor(name, age, gender){
		super(name, age, gender);
	}
	cry(){
		console.log("Waaaaaah");
	}
	nap(){
		console.log(this.name + " is sleeping. Be quiet!");
	}
};

class Firetruck extends Car {
	constructor(model, color, topSpeed) {
		super(model, color, topSpeed);
		this.color = "red";
	}
	siren(){
		console.log("Look out! There's a fire.");
	}
	hose(){
		console.log("The fire is dying down.");
	}
}

class Bird extends Pet {
	constructor(name, age, species, gender, breed){
		super(name, age, species, gender);
		this.species = "bird";
		this.breed = breed;
	}
	call(){
		console.log("Caw!");
	}
	fly(){
		console.log("Up, up, and away!");
	}
};