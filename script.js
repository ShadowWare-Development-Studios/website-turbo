const button = document.querySelector("#mystery-button");
const mystery = document.querySelector("#fun-mystery");

if (button && mystery) {
    button.addEventListener("click", () => {
        mystery.hidden = !mystery.hidden;
    });
}