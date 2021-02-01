// it's ok, captain!

// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE



})();

let name = window.prompt("Votre nom ?");
let age = window.prompt("Votre âge ?");
let city = window.prompt("Votre ville ?");

if (confirm ("it's ok? " + "ton nom: " + name + "ton âge: " + age + "ta ville: " + city) != true) {
    name = prompt("Votre nom ?")
    age = prompt("Votre âge ?");
    city = prompt("Votre ville ?");
}