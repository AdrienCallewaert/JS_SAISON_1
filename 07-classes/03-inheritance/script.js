// it's ok, captain!

// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal {
        constructor(name) {
            super();this.name = name;
        }
        static greeting = "get out human ";

    }

    class Dog extends Animal {
        constructor(name) {
            super();this.name = name;
        }
        static greeting = "welkome human ";

    }
    
    document.getElementById("run").addEventListener("click", ()=>{
        let firstcat = new Cat("Happy");
        let firstdog = new Dog("Quaonne");



        console.log(firstcat.sayHello());
        console.log(firstdog.sayHello());

    }) 
})();
