const camera = document.getElementById("camera");
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    camera.srcObject = stream;
});

let cookies = 0;

const counter =
    document.getElementById("counter");
const button = 
    document.getElementById("cookieBtn");

button.addEventListener("click",
    function()  {
        cookies = cookies + clickPower;
        counter.textContent =
        "Cookies: " + cookies;
    }
);

let clickPower = 1;

const multiplierBtn = document.getElementById("multiplierBtn");

multiplierBtn.addEventListener("click", function() {
    if (cookies >= 5)  {
    cookies = cookies - 5;
            clickPower = clickPower + 10;
            counter.textContent ="Cookies: " + cookies;
}
});