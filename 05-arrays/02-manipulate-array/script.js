// it's ok, captain!

// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
    document.getElementById("run").addEventListener("click", () => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    let Remove1 = fruits.shift();
    let Remove2 = fruits.pop();
    fruits.unshift("banana")
    fruits.push("kiwi");

        alert(fruits);
    });
})();
