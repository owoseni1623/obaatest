// Test Number 2
// Write a JavaScript program to print the multiplication table of 5 up to 12 using a for loop. 

let numbers = [5,6,7,8,9,10,11,12]

for (let a = 1; a <= 12; a++) {
    let result = 5 * a;
    console.log(`5 x ${a} = ${result}`);
}


// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//     console.log(i, j);
//     }
//    }
   

// Test Number 3
// Create a class BankAccount with private properties balance and accountNumber. Implement methods deposit(amount) and withdraw(amount) to modify the balance. Additionally, implement a method getBalance() to retrieve the balance. Ensure that the balance property can only be modified through the deposit and withdraw methods. (20 mrks)

class BankAccount {
    #balance;
    #accountNumber;

    constructor(accountNumber) {
        this.#balance = 0;
        this.#accountNumber = accountNumber;
    }

    deposit(amount) {
        if (amount <= 0) {
            return 
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            return 
        }
        if (amount > this.#balance) {
            return
        }
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("3091287404");
console.log("Initial balance:", account.getBalance());
account.deposit(70000);
console.log("After deposit:", account.getBalance());
account.withdraw(30000);
console.log("After withdrawal:", account.getBalance());



// Test Number4
// You're analyzing engagement on social media posts. Given arrays representing likes and comments for each post, write a function to calculate the total engagement (likes + comments) for each post. Use the array below… let likes = [10, 20, 15, 30] and let comments = [5, 10, 8, 15] Your result would be a new array [15, 30, 23, 45 ] 

function calculateEngagement(likes, comments) {
    if (likes.length !== comments.length) {
        return new Error ();
    }

    let totalEngagement = [];

    for (let i = 0; i < likes.length; i++) {
        totalEngagement.push(likes[i] + comments[i]);
    }

    return totalEngagement;
}


let likes = [10, 20, 15, 30];
let comments = [5, 10, 8, 15];
let totalEngagement = calculateEngagement(likes, comments);
console.log(totalEngagement);




// Test Number 5
// . Create a class called Animal with properties like name, age, and species. Implement methods like eat() and sleep(). Then create subclasses like Dog, Cat, and Bird inheriting from the Animal class. Show instances of where an animal is eating or sleeping.

class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    eat() {
        console.log(`I have a ${this.species} ${this.name} is her name but she love eating food.`);
    }

    sleep() {
        console.log(`There are is a ${this.species} ${this.name} in my area she can sleep for Africa.`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age, "Dog");
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age, "Cat");
    }
}

class Bird extends Animal {
    constructor(name, age) {
        super(name, age, "Bird");
    }
}


const dog = new Dog("Bella", 5);
const cat = new Cat("Alicia", 3);
const bird = new Bird("Parrot", 2);


dog.eat();
cat.sleep();
bird.eat();