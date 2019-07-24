var sqnum = 6;
var colors = generateRandomColors(sqnum);

var reset = document.querySelector("#reset");

var messageDisplay = document.querySelector("#message");

var random = Math.floor(Math.random() * colors.length);
var pickedColor = pickColor(sqnum);
var colorDisplay = document.getElementById("colorCodeHead");

var sq = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");



easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    sqnum = 3;
    colors = generateRandomColors(sqnum);
    pickedColor = pickColor(sqnum);
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 6; i++) {
        if (i < 3) {
            sq[i].style.background = colors[i];
        }
        else {
            sq[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    sqnum = 6;
    colors = generateRandomColors(sqnum);
    pickedColor = pickColor(sqnum);
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < sqnum; i++) {
        sq[i].style.background = colors[i];
        if (i > 2) {
            sq[i].style.display = "block";
        }
    }
});



reset.addEventListener("click", function () {
    reset.textContent = "New Colors";
    colors = generateRandomColors(sqnum);
    pickedColor = pickColor(sqnum);
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < sq.length; i++) {
        sq[i].style.background = colors[i];
    }



});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < sqnum; i++) {
    sq[i].style.background = colors[i];
    sq[i].addEventListener("click", function () {
        //grab color of clicked squares
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = ("Correct");
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?";
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = ("Try Again");
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        sq[i].style.background = color;
    }
}

function pickColor(sqnum) {
    var random = Math.floor(Math.random() * sqnum);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
        arr.push("rgb(" + red + ", " + green + ", " + blue + ")");
    }
    return arr;
}
