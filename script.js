function upDate(element) {
    console.log("Mouse or keyboard focus detected");
    element.style.backgroundColor = "#dceeff";
}

function undo() {
    let figures = document.querySelectorAll("figure");

    for (let i = 0; i < figures.length; i++) {
        figures[i].style.backgroundColor = "white";
    }
}

function addTabindex() {
    console.log("Page loaded - Adding tabindex");

    let figures = document.querySelectorAll("figure");

    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
    }
}

window.onload = addTabindex;