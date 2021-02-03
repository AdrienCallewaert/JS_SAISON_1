
// it's ok, captain!

// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here
    
    document.getElementById("run").addEventListener("click",() => {
        let colorBg = document.getElementById("color").value;
        document.body.style.backgroundColor = colorBg;
    })

})();
