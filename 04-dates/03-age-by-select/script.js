// it's ok, captain!

// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here


    document.getElementById("run").addEventListener("click", () => {

        let currentDate = new Date();

        let birthD = document.getElementById("dob-day").value;
        let birthM = document.getElementById("dob-month").value;
        let birthY = document.getElementById("dob-year").value;

        let age = currentDate.getFullYear() - birthY;

            if (birthM > currentDate.getMonth() + 1) {
                age = age - 1;
            }
            else if (birthM < currentDate.getMonth() + 1) {
                    age = age;
            }
            else if (birthM == currentDate.getMonth() + 1) {
                if (birthD <= currentDate.getDate()) {
                age = age;
                }
            else {
            age = age - 1;
            }
        }

        alert("Birthday is : " + birthD + "." + birthM + "." + birthY + " : You are is " + age + " years.")

    });


    
})();
