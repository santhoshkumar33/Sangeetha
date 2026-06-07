function showMessage() {
    document.getElementById("message").innerHTML =
        "🌸 Sangeetha, Maanasu vitu sollran school start aagiruchu innu padikama enkuda sanda potutu irruka,ennaya hurt😭 pannra eppdi la pannitu irruntha onnuku nalla saavey varathu bro. Anna va feel panna vidama nalla pathukoo!!!...Na anupirukuratha padichuta moodi vachutu school ku kelambu sirikama Byee mental💖";
}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = ["💖", "💕", "💗", "💝", "🌸", "✨"];

    heart.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);