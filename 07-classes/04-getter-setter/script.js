// it's ok, captain!

// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here

    class Person {
        constructor(firstname, lastname,) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
        get name() {
                return this.firstname + " " + this.lastname;
            }
        set name(ajout) {
            [this.firstname, this.lastname] = ajout.split(" ");
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        let newValue = new Person("Adr", "Cal");
        console.log(newValue.name);
        newValue.name = "Adrien callewaert";
        console.log(newValue.lastname,newValue.firstname);
        
    }) 

})();
