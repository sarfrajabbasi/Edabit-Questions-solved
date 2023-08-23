class Player{
    constructor(name,age,height,weight){
        [this.name,this.age,this.height,this.weight] = [name,age,height,weight]
    }
    getAge = () => `${this.name} is age ${this.age}`; 
    getHeight =() => `${this.name} is ${this.height}cm`;
    getWeight =() => `${this.name} weighs ${this.weight}kg`
}

player1 = new Player('Patrick Mahomes', 24, 188, 104)
player2 = new Player('Jimmy Garoppolo', 28, 188, 102)
player3 = new Player('Julio Jones', 31, 191, 100)

console.log(player1.getAge(), 'Patrick Mahomes is age 24')
console.log(player1.getHeight(), 'Patrick Mahomes is 188cm')
console.log(player1.getWeight(), 'Patrick Mahomes weighs 104kg')

console.log(player2.getAge(), 'Jimmy Garoppolo is age 28')
console.log(player2.getHeight(), 'Jimmy Garoppolo is 188cm')
console.log(player2.getWeight(), 'Jimmy Garoppolo weighs 102kg')

console.log(player3.getAge(), 'Julio Jones is age 31')
console.log(player3.getHeight(), 'Julio Jones is 191cm')
console.log(player3.getWeight(), 'Julio Jones weighs 100kg')