interface Character {
    attack(c:Character)
    heal(c:Character)
}

class Ninja {
    attack(c) {
        c.hp -= 15
        console.log(c.hp)
        
    }
    heal(c) {
        this.hp += 10
    }
    throw(c) {
        c.hp -= 20
    }
    hp:number = 50
}

class Rebel {
    attack(c) {
        c.hp -= 15
        console.log(c.hp)
    }
    heal(c) {
        this.hp += 10
    }
    swing(c) {
        c.hp -= 20
    }
    hp:number = 75
}

let hasagi = new Ninja();
let darian = new Rebel();
let c:Character[] = [hasagi, darian];

c[1].attack(c[0]);