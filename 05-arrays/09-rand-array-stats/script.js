// it's ok, captain!

// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", ()=>{

        let myGroup = [];
        for(let i=1; i<11; i++){
            myGroup.push(Math.floor(Math.random()*100));
            document.getElementById("n-"+i).innerHTML = myGroup[myGroup.length-1];
        }


        document.getElementById("min").innerHTML = Math.min(...myGroup);
        document.getElementById("max").innerHTML = Math.max(...myGroup);
        document.getElementById("sum").innerHTML = myGroup.reduce((a,b)=> a+b);
        document.getElementById("average").innerHTML = myGroup.reduce((a,b)=> a+b)/myGroup.length.toFixed(2);

    })
})();
