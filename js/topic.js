function setTheme(theme) {
    document.body.className = theme
}

function setBtnSize(btn) {
    let lis = document.getElementById("nav").children[0].children
    for (li of lis) {
        if(li.children[0] === btn) {
            li.children[0].classList.add("click")
        } else {
            li.children[0].classList.remove("cilck")
        }
    }
}