// it's ok, captain!

// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Happy", "cat", 9, "female", "garbage"];
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        
        let Arr = [];

        keys.forEach((newKeys, newValues) => {
            Arr.push([newKeys, values[newValues]]);
        });

        let nObject = Object.fromEntries(Arr);

        console.log(nObject);
    });

})();