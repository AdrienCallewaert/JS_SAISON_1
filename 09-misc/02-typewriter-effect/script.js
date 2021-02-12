// it's ok, captain! ou pas hein

// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here


    let i = 0;
    let txt = document.getElementById('target').textContent;
    let speed = Math.floor(Math.random()*txt.length); 
    
    function Supp(){
         document.getElementById('target').innerHTML = ''
    }
    
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    Supp()
    typeWriter()
})();

