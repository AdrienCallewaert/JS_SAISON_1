// it's ok, captain!

// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let msg = "";
    let today = new Date();
    // let today = new Date("September 22, 2018 21:00:00");
    let currentHour = today.getHours();
    let currentMin = today.getMinutes();

    if(currentHour<18){
        if(currentHour==17){
            if(currentMin<30){msg = "Hello!";}
            else{msg = "Good evening!";}
        }else{
        msg = "Hello!";
        }
    }else{msg = "Good evening!";}

    document.getElementById("target").innerHTML = msg;
})();
    // your code here


