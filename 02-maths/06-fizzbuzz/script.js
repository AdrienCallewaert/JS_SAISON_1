
// it's ok, captain!

// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here

    let i = 1;

    while (i <= 100) {
        if (i % 3 === 0) {
            console.log("fizz");
        }
        if ( i % 5 === 0) {
            console.log("buzz");
        }
        if (i % 3 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        console.log(i);
        i += 1;
    }

})();
