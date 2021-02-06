// it's ok, captain!

// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let target = document.getElementById("target");
    let createTable = document.createElement("table");

    target.appendChild(createTable);
    
        for(let i=0; i<10; i++){
            let createRow = document.createElement("tr");
            
            target.children[0].appendChild(createRow);
            let createColumn = document.createElement("td");
            
            target.children[0].children[i].appendChild(createColumn)
            let cpt = i+1;
            
            target.children[0].children[i].children[0].innerHTML = "Row " + cpt;
    }
})();
