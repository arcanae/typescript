interface Pet {
    scratch();
    eat();

}

class Cat {
    name:string

    constructor(name:string){
        this.name = name
    }

    scratch() {
        console.log(this.name+", the cat, scratching");
    }

    eat() {
        console.log(this.name+", the cat, is eating some food");
    }
}

class Turtle {
    name:string

    constructor(name:string){
        this.name = name
    }

    scratch() {
        console.log(this.name+", the turtle, scratching");
    }

    eat() {
        console.log(this.name+", the turtle, is eating some lettuce");
    }
}

let felix = new Cat("Felix");
let sarla = new Turtle("Sarla");

let pet:Pet[] = [felix, sarla];

for (let val of pet) {
    val.eat();
    val.scratch();
}