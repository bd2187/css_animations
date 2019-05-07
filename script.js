var clickableEl = document.getElementsByClassName("clickableContainer")[0];
var colors = ["green", "purple", "red", "yellow", "orange", "pink", "black"];
clickableEl.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    clickableEl.style.background = colors[randomIndex];
});
