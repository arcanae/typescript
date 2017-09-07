interface RenderFunc {
    render();
}

class Tree {
    height:number
    species:string
    color:string
    age:number

    constructor(height:number, species:string, color:string, age:number) {
        this.height = height
        this.species = species
        this.color = color
        this.age = age
    }

    render(){
        if (this.species === "christmas-tree") {
            console.log("🎄");
        }
        if (this.species === "spruce") {
            console.log("🌲");
        }
        if (this.species === "palmtree") {
            console.log("🌴");
        }
        console.log("height: " + this.height + "m")
        console.log("color: " + this.color)
        console.log("age: " + this.age + "y")        
    }
}

class Animal {
    species:string;

    constructor(species:string) {
        this.species = species
    }
    render(){
        if (this.species === "monkey") {
            console.log("🐵");
        }
        if (this.species === "wolf") {
            console.log("🐶");
        }
        if (this.species === "dog") {
            console.log("🐺");
        }
    }
}
let spruce = new Tree(15, "spruce", "brown", 85);
let christmas = new Tree(2, "christmas-tree", "green", 1)
let palmtree = new Tree(5, "palmtree", "orange", 20)

let wolf = new Animal("wolf");
let dog = new Animal("dog")
let monkey = new Animal("monkey");

let r:RenderFunc[] = [spruce, christmas, palmtree, wolf, dog, monkey];

for (let val of r) {
    val.render();
}