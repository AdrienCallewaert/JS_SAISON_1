
// it's ok, captain!

// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let operandOne = new Number(document.getElementById("op-one").value)
        let operandTwo = new Number(document.getElementById("op-two").value)
        let resultat = operandOne + operandTwo
        return alert(resultat)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let operandOne = new Number(document.getElementById("op-one").value)
        let operandTwo = new Number(document.getElementById("op-two").value)
        let resultat = operandOne - operandTwo
        return alert(resultat)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let operandOne = new Number(document.getElementById("op-one").value)
        let operandTwo = new Number(document.getElementById("op-two").value)
        let resultat = operandOne * operandTwo
        return alert(resultat)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let operandOne = new Number(document.getElementById("op-one").value)
        let operandTwo = new Number(document.getElementById("op-two").value)
        let resultat = operandOne / operandTwo
        return alert(resultat)
    });
})();
