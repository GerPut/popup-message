const popup = document.querySelectorAll(".popup");
const DispMsg = document.querySelector(".message");
const text = document.querySelector(".textmessage");
const msgButton = document.querySelector(".msgButton");


msgButton.addEventListener("click", () => DispMsg.classList.add("hide"))

for (let i = 0; i < popup.length; i++) {
    popup[i].addEventListener("click", function () {
        let popuptext = this.getAttribute("data-message")
        message(popuptext)
    })
}

function message(popuptext) {
    DispMsg.classList.remove("hide")
    text.innerHTML = popuptext;
}
