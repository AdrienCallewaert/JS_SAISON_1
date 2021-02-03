// it's ok, captain!

// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let msg = "";
    let today = new Date();
    let currentHour = today.getHours();
    if(currentHour<18){msg = "Hello!";}else{msg = "Good evening!";}
    document.getElementById("target").innerHTML = msg;

})();

