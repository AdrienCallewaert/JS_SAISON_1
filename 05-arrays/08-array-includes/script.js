// it's ok, captain!

// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        let position = fruits.indexOf("apple")
            if(fruits.indexOf("apple") != -1){
            alert("Yes, there's an apple in the array 'fruits'");
            }else{
            alert("No, there's no apple in the array 'fruits'");
            }
    })

})();
