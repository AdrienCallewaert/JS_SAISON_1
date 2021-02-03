// it's ok, captain!

// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        const year = document.getElementById("year").value;
        var months = [];

        for (month = 1; month <= 12; month ++) {
            var date = new Date(month + "/13/" + year);                          
            if (date.getDay() == 5) {
                months.push(date.toLocaleString('default'));
            }
        }

        alert(months);

});




})();











/* fail... à résoudre

let friday = 0;

document.getElementById("run").addEventListener("click", (a) => {

    a = document.getElementById("year").value;
    for (i = 0; 1 < 12; 1 ++){
        let year = new Date(a,1,13);
        if (year.getDay() == 5){
            
            friday++;
        }
    }
    return alert(friday);
});

*/
