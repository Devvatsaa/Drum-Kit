var nob = document.querySelectorAll(".drum").length;
for (var i = 0; i < nob; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerButton = this.innerHTML;
        playSounds(innerButton);
        buttonAnimation(innerButton)
    });
}
document.addEventListener("keypress", function (res) {
    playSounds(res.key);
    buttonAnimation(res.key)
})
function playSounds(innerButton) {
    // console.log(this)
    //    var innerButton = this.innerHTML;
    switch (innerButton) {
        case "w":
            var snare = new Audio('snare.mp3')
            snare.play();
            break;
        case "a":
            var snare = new Audio('tom-1.mp3')
            snare.play();
            break;
        case "s":
            var snare = new Audio('tom-2.mp3')
            snare.play();
            break;
        case "d":
            var snare = new Audio('tom-3.mp3')
            snare.play();
            break;
        case "j":
            var snare = new Audio('tom-4.mp3')
            snare.play();
            break;
        case "k":
            var snare = new Audio('crash.mp3')
            snare.play();
            break;
        case "l":
            var snare = new Audio('kick-bass.mp3')
            snare.play();
            break;


        default:
            break;
    }
}
function buttonAnimation(innerButton) {
    var activeButton = document.querySelector("." + innerButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed"),100
    })

}