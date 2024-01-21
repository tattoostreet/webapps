let numberOfDrums = document.getElementsByClassName("drum").length;
let drumSet = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(document.querySelectorAll(".drum")[i].innerHTML) = this
        let click = this.innerHTML;
        playSound(click);
        animateKey(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    console.log(`${event.key} is pressed...`);
    playSound(event.key);
    animateKey(event.key);
})

function playSound(key) {
    switch (key) {
        case "z":
            let playCrash = new Audio("sounds/crash.mp3");
            playCrash.play();
            break;
        case "x":
            let playKick = new Audio("sounds/kick-bass.mp3");
            playKick.play();
            break;
        case "c":
            let playSnare = new Audio("sounds/snare.mp3");
            playSnare.play();
            break;
        case "v":
            let playTom1 = new Audio("sounds/tom-1.mp3");
            playTom1.play();
            break;
        case "b":
            let playTom2 = new Audio("sounds/tom-2.mp3");
            playTom2.play();
            break;
        case "n":
            let playTom3 = new Audio("sounds/tom-3.mp3");
            playTom3.play();
            break;
        case "m":
            let playTom4 = new Audio("sounds/tom-4.mp3");
            playTom4.play();
            break;
        default:
            console.log("this is not valid key...")
            break;
    }
}

function animateKey(key) {
    let animate = document.querySelector(`.${key}`);
    animate.classList.add("pressed");
    setTimeout(() => {
        animate.classList.remove("pressed");
    }, 100);
}