
function switchStyle(){
    style = document.getElementById("mainStyleSheet").getAttribute("href");

    if (style == "style-2.css") {
        document.getElementById("mainStyleSheet").setAttribute("href", "style.css");
        localStorage.setItem("style", "style.css");
    }
    else {
        document.getElementById("mainStyleSheet").setAttribute("href", "style-2.css");
        localStorage.setItem("style", "style-2.css");
    }
}

window.onload = function(){
    document.getElementById("mainStyleSheet").setAttribute("href", localStorage.getItem("style"));
}