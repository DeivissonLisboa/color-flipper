function hexGeneretor() {
    let hex = 0xFFFFFF
    let a = Math.random()
    color_code = (hex * a).toString(16).split(".")[0]
    if (color_code.length != 6) {
        color_code = hexGeneretor()
        return (color_code)
    }
    else {
        return ("#" + color_code)
    }
}

var box = document.getElementById("box");
var text = document.getElementById("colorCode");
var button = document.getElementById("generate_buttom");


button.onclick = function () {
    hex_code = hexGeneretor();
    console.log(hex_code);
    text.innerText = hex_code;
    box.style.backgroundColor = hex_code;
};
