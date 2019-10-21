var defaultcolor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
var body = document.querySelector("body");
var p = document.getElementById("rgboutput");

window.addEventListener("load", startup, false);

function startup() {
    body.style.backgroundColor = defaultcolor;
    p.innerHTML = getrgb(defaultcolor);
    var randomcolor = document.getElementById("hex");
    randomcolor.setAttribute("value", defaultcolor.toUpperCase());
    body.addEventListener("input", function () {
        changec(hexcolor);
    });
}

function changec(hexcolor) {
    if (hexcolor[0] !== '#')
        hexcolor = '#' + hexcolor;

    body.style.backgroundColor = hexcolor;
    p.innerHTML = getrgb(hexcolor);
}


var getrgb = function (ahexcolor) {
    if(ahexcolor[0] === '#') ahexcolor = ahexcolor.substring(1, 7);

    var rgbcolor = {};
    rgbcolor.r = parseInt(ahexcolor.substring(0, 2), 16);
    rgbcolor.g = parseInt(ahexcolor.substring(2, 4), 16);
    rgbcolor.b = parseInt(ahexcolor.substring(4, 6), 16);


    return 'RGB: ' + rgbcolor.r + ', ' + rgbcolor.g + ', ' + rgbcolor.b;
};