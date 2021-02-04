// it's ok, captain!

// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here


    document.getElementById("run").addEventListener("click", ()=>{

        let person = {
            firstName : "Adrien",
            lastName : "Callewaert",
            age : 31,
            city : "Namur",
            country : "Belgique"
          };

        alert("Hello, je suis " + person.firstName + " " + person.lastName + ". J'ai " + person.age + " ans, j'habite " + person.city + " en " + person.country + ".");

    }) 
})();
