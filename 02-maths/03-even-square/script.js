// it's ok, captain!

// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let suite = [];
        // your code here
        for (let i = 1; i <= 21; i++) {
            resu = i ** 2;
            suite.push(resu);
        }
        return alert(suite);
    });

})();













/*



(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let a = 0;
        for (let i = 0; i < 21; i++) {
            alert(Math.pow(i + 1, 2));

        }
    });

})();


*/
