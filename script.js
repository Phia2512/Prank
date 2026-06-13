
const btn = document.getElementById("yesBtn");

let count = 0;

// Move Button Function
function moveButton(){

    if(count < 8){

        const messages = [
            "Not yet 😏",
            "Try again 😂",
            "Almost 🤭",
            "Too slow 😎",
            "Catch me 😜",
            "Nope 😆",
            "Keep trying 💖",
            "Okay okay..."
        ];

        btn.innerHTML = messages[count];

        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;

        btn.style.transform =
        `translate(${x}px, ${y}px)`;

        count++;
    }

    if(count === 8){
        btn.innerHTML = "Open Report 📂";
    }
}

// Desktop
btn.addEventListener("mouseenter", moveButton);

// Mobile
btn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

// Go to Page 2
btn.addEventListener("click", () => {

    if(count >= 8){

        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "flex";
    }
});

// PAGE 2 → PAGE 3
function startScan(){

    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "flex";

    document.getElementById("scan1").style.opacity = "0";
    document.getElementById("scan2").style.opacity = "0";
    document.getElementById("scan3").style.opacity = "0";
    document.getElementById("scan4").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("scan1").style.opacity = "1";
    }, 500);

    setTimeout(() => {
        document.getElementById("scan2").style.opacity = "1";
    }, 1500);

    setTimeout(() => {
        document.getElementById("scan3").style.opacity = "1";
    }, 2500);

    setTimeout(() => {
        document.getElementById("scan4").style.opacity = "1";
    }, 3500);

    setTimeout(() => {

        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "flex";

        createHearts();

    }, 5000);
}

// Floating Hearts on Final Page
function createHearts(){

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "heart-float";

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "25px";
        heart.style.animation = "float 5s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 300);
}
