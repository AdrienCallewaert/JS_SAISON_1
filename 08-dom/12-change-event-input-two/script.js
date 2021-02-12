// it's ok, captain! ou pas hein

// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
       function size(){
            let size = ["x-small","small","medium","large","x-large"];
            let fontsize = Math.floor(Math.random() * size.length);
       return size[fontsize]
       }
   
       let span = document.getElementById('target').textContent.split('').map( lettre => `<span class ='`+ lettre +`' style ='font-size:` +size()+ `' >`+ lettre +'</span>').join('');
   
       return document.getElementById('target').innerHTML = span
       
   })();