const button = document.querySelector("#mystery-button");
const mystery = document.querySelector("#fun-mystery");

button.addEventListener('click', function () {
    mystery.hidden = !mystery.hidden;
});