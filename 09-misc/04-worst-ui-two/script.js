// it's ok, captain! ou pas hein

// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {
    const target = document.getElementById("target");
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            let value = parseFloat(button.innerText);

            value++;

            if (value > parseFloat(button.getAttribute("data-max"))) {
                value = button.getAttribute('data-min');
            }

            button.innerText = `${value}`.padStart(2, "0");

            target.innerText = `+${buttons.map(btn => btn.innerText).join('')}`;
        });
    });

})();