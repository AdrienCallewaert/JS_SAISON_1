// it's ok, captain! ou pas hein

// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

// your code here

const target = document.getElementById("target");
const buttons = Array.from(document.querySelectorAll("button"));
const inputs = Array.from(document.querySelectorAll("input"));

const time = 250;

buttons.forEach((button, i) => {

    const interval = () => {

        const input = inputs[i];

        let value = parseFloat(input.value);

        if (++value > parseFloat(input.getAttribute("data-max"))) {
            value = input.getAttribute("data-min");
        }

        input.value = `${value}`.padStart(2, "0");

        target.innerText = `+${inputs.map(inp => inp.value).join("")}`;
    };

    let intervalID = setInterval(interval, time);

    button.addEventListener("click", () => {

        if (intervalID) {
            clearInterval(intervalID);
            intervalID = null;
            button.innerText = "Start";
        } else {
            intervalID = setInterval(interval, time);
            button.innerText = "Stop";
        }
    });
});
})();