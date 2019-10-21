var randomcode1 = Math.floor(Math.random() * 255);
var randomcode2 = Math.floor(Math.random() * 255);
var randomcode3 = Math.floor(Math.random() * 255);

var defaultcolor = "rgb(" + randomcode1 + "," + randomcode2 + "," + randomcode3 + ")";
var body = document.querySelector("body");

window.addEventListener("load", startup, false);

function changetohex(r, g, b) {
    if (body && r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        var red = gethex(r);
        var green = gethex(g);
        var blue = gethex(b);
        return red + green + blue;
    }
}

function startup() {
    body.style.backgroundColor = defaultcolor;

    var randomcolor = document.getElementById("r");
    randomcolor.setAttribute("value", randomcode1);

    randomcolor = document.getElementById("g");
    randomcolor.setAttribute("value", randomcode2);

    randomcolor = document.getElementById("b");
    randomcolor.setAttribute("value", randomcode3);
    changec(randomcode1, randomcode2, randomcode3);

    body.addEventListener("input", function () {
        changec(r, g, b);
    });
}

function changec(r, g, b) {
    if (body && r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        var p = document.getElementById("hexoutput");
        p.innerHTML = "Hex: #" + changetohex(r, g, b).toUpperCase();
    }
}

var gethex = function (rgbvalue) {
    var hex = Number(rgbvalue).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};